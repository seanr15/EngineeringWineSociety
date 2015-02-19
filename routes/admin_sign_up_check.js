var pg = require('pg');
var bcrypt = require('bcrypt');

exports.check = function(req, res){
    console.log('new user to add to table'); 
    console.log(req.body.firstname);     
    console.log(req.body.lastname);     
    console.log(req.body.email);     
    console.log(req.body.password);

		bcrypt.genSalt(10, function(err, salt) {
                  bcrypt.hash(req.body.password, salt, function(err, hash) {
                        // Store hash in your password DB.
                               pg.connect(process.env.DATABASE_URL, 
	                                       function(err, client) {
                                           var query = client.query('Insert Into Users values($1,$2,$3,$4,$5) RETURNING username',
																				                           [req.body.email,hash,'U',req.body.firstname,req.body.lastname],
	                                                                 function(err,result){
                                                                      if(err){
                                                                        console.log(err);
																																				client.end();
																																				
		                                                                    res.render('admin_sign_up',{'status':[{'li_status':err.message}]});
																																				
															                                        }
															                                        else {
                                                                         console.log('row inserted with id: ' + result.rows[0].username);
															                                            client.end();
																																				 
		                                                                      res.render('admin_sign_up',{'status':[{'li_status':'added Successfully'}]} ); 
																																					
																																			}
																																		 
													                                         });
														 

    
                              });
                         


                 });
      });
		
    //res.render('admin_sign_up',{'status':[{'li_status':'Fail'}]});
};
