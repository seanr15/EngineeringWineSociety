var pg = require('pg');
var bcrypt = require('bcrypt');




exports.process = function(req, res){


    console.log('Log in info to look up');
    

		
    console.log(req.body.email);
    console.log(req.body.password);
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
                          console.log("password Valid!");
													//determine if user is admin
			                    if(user['user'][0]['role']=='A'){
			 	                    client.end();
													 
		                        res.redirect('index');
													}
													else{
                            console.log("Valid User!");
 
													}
												/*	else{
		                        //res.redirect('/user_index');
														
													}*/
					              }
			                  else{
		                      client.end();
		                      res.redirect('/');
												}
			  });
			}
		});
  });


	 var allwines={'allwines':[]};
   pg.connect(process.env.DATABASE_URL, function(err, client) {
   var query = client.query('SELECT * FROM userratings where username=$1',[req.body.email]);
    
    
    query.on('row', function(row,result) {
      console.log(JSON.stringify(row));
		  allwines['allwines'].push(row);
			
    });
	  query.on('end',function(result){
	    console.log(allwines);
			//render here for data
			var i = 0;
			for (var wine_row in allwines['allwines']) {
        allwines['allwines'][wine_row]['id']=i;
				i = i + 1;

      }
    	res.render('user_index',allwines);
			
		  client.end();

	  });					 
  });

//	}
		
  
		//res.redirect('index');
};

