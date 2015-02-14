var pg = require('pg');


exports.delete_wine = function(req, res){
 	
  console.log(req.query.wine);
    pg.connect(process.env.DATABASE_URL, 
	           function(err, client) {
               var query = client.query('Delete From AllWines Where name=$1 RETURNING name',[req.query.wine],
	                                       function(err,result){
                                           if(err){
                                             console.log(err);
															             }
															             else {
                                             console.log('row Deleted with name: ' + result.rows[0].name);
                                           }
															             client.end();
  	                                       res.redirect('/');																					 
																					 
													               });
														 

    
             });

	
   
};
