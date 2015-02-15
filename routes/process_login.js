var pg = require('pg');
var bcrypt = require('bcrypt');




exports.process = function(req, res){


    console.log('Log in info to look up');
    

		
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.newuser);
		if( req.body.newuser == 'sign_up' ){
      bcrypt.genSalt(10, function(err, salt) {
                  bcrypt.hash(req.body.password, salt, function(err, hash) {
                        // Store hash in your password DB.
                               pg.connect(process.env.DATABASE_URL, 
	                                       function(err, client) {
                                           var query = client.query('Insert Into Users values($1,$2,$3) RETURNING username',
																				                           [req.body.email,hash,'A'],
	                                                                 function(err,result){
                                                                      if(err){
                                                                        console.log(err);
															                                           client.end();
																																				
															                                        }
															                                     else {
                                                                         console.log('row inserted with id: ' + result.rows[0].username);
		                                                                      res.redirect('index');
															                                            client.end();
																																					
																																				 
                                                                     }
																																		 
													                                         });
														 

    
                              });
                         


                 });
      });



		}
		else if(req.body.newuser == 'sign_in'){


		 var user={'user':[]};
     pg.connect(process.env.DATABASE_URL, function(err, client) {
     var query = client.query('SELECT * FROM Users where username=$1',[req.body.email]);
    
    
    query.on('row', function(row,result) {
		  if(result){
        console.log(JSON.stringify(row));
		    user['user'].push(row);
			else{
		    client.end();
       
        res.redirect('login');

			}
			
    });
	  query.on('end',function(result){
	    console.log(user['user'][0]);
			//render here for data
		  bcrypt.compare( req.body.password,user['user'][0]['phash'], function(err, res) {
       
			 if(res === true){
			
			 	  client.end();
		       res.redirect('index');

			   


			 }
		  client.end();
		 res.redirect('login');
			
			 
			 

    
		
		
		
		});
			
			

	  });					 
  });

		






		}
		
  
		//res.redirect('index');
};

