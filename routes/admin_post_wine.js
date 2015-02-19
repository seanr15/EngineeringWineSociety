var pg = require('pg');


exports.post_wine = function(req, res){
  console.log("New Wine Data to post in database");
  console.log(req.body.url);
  console.log(req.body.name);
  console.log(req.body.varietal);
  console.log(req.body.vineyard);
  pg.connect(process.env.DATABASE_URL, 
	           function(err, client) {
               var query = client.query('Insert Into PostedWines values($1,$2,$3,$4) RETURNING name',[req.body.name,req.body.varietal,req.body.vineyard,req.body.url],
	                                       function(err,result){
                                           if(err){
                                             console.log(err);
															             }
															             else {
                                             console.log('row inserted with id: ' + result.rows[0].name);
                                           }
                                           client.end();
  	                                       res.redirect('index');
													               });
														 

    
             });
 
	
   
};
