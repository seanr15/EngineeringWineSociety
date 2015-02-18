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
																				                           [req.body.email,hash,'U'],
	                                                                 function(err,result){
                                                                      if(err){
                                                                        console.log(err);
		                                                                    res.redirect('/');
																																				client.end();
																																				
															                                        }
															                                        else {
                                                                         console.log('row inserted with id: ' + result.rows[0].username);
		                                                                      res.redirect('/');//need to change this 
															                                            client.end();
																																					
																																			}
																																		 
													                                         });
														 

    
                              });
                         


                 });
      });



		}
		else{


	var user={'user':[]};
  pg.connect(process.env.DATABASE_URL, function(err, client) {
     
		 var query = client.query('SELECT * FROM Users where username=$1',[req.body.email]);
    
    
    query.on('row', function(row,result) {
		    user['user'].push(row);
					
    });
	  query.on('end',function(err,result){
	    			
		 
		  if( user['user'].length == 0 ){
          client.end();
					res.redirect('/');
         
			}
			else{
			//render here for data
		    bcrypt.compare( req.body.password,user['user'][0]['phash'], 
			                function(err, result2) {
       
			                  if(result2 === true){

			 	                  client.end();
													//determine if user is admin
			                    if(user['user'][0]['role']=='A'){
		                        res.redirect('index');
													}
													else{
		                        res.redirect('/');
                           
													}
					 
                        }
			                  else{
		                     client.end();
												
		                     res.redirect('/user_index');
		                    }
			  });
			}
		});					 
  });

	}
		
  
		//res.redirect('index');
};

