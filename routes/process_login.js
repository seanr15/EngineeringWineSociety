var pg = require('pg');
var bcrypt = require('bcrypt');




exports.process = function(req, res){


    console.log('Log in info to look up');
    

		
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.newuser);
//		if( req.body.newuser == 'sign_up' ){
      



//		}
//		else{


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
													  client.end();

		                         var allwines={'allwines':[]};

                            var query2 = client.query('SELECT * FROM userratings where username=$1',[req.body.email]);
                            query2.on('row', function(row,result) {
		                          allwines['allwines'].push(row);
					
                            });
	                           query2.on('end',function(err,result){
	    			                  
		                           if( result.rows.length == 0 ){
															    console.log('NO rated Wines !!!!!!!!!!!');
															   
                                 client.end();
					                       res.render('user_index');
         
			                         }
														   else{
															    console.log('All rated Wines !!!!!!!!!!!');
														      client.end();
                                 res.render('user_index',allwines);
															}
													 });
					              }
			                  
									  }
										else{
		                      client.end();
		                      res.redirect('/');
										}
			  });
			}
		});					 
  });

//	}
		
  
		//res.redirect('index');
};

