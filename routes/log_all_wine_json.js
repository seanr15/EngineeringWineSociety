var pg = require('pg');


exports.all_wine = function(req, res){
  console.log("New Wine Data to store in database");
  console.log(req.query.url);
  console.log(req.query.wine);
  console.log(req.query.varietal);
  console.log(req.query.vineyard);
  pg.connect(process.env.DATABASE_URL, 
	           function(err, client) {
               var query = client.query('Insert Into AllWines values($1,$2,$3,$4) RETURNING name',[req.query.wine,req.query.varietal,req.query.vineyard,req.query.url],
	                                       function(err,result){
                                           if(err){
                                             console.log(err);
															             }
															             else {
                                             console.log('row inserted with id: ' + result.rows[0].name);
                                           }
															             client.end();
													               });
														 

    
             });



	var allwines={'allwines':[]};
  pg.connect(process.env.DATABASE_URL, function(err, client) {
   var query = client.query('SELECT * FROM AllWines');
    

    query.on('row', function(row,result) {
      console.log(JSON.stringify(row));
		  allwines['allwines'].push(row);
    });
	  query.on('end',function(result){
	    console.log(allwines);
			//render here for data
    	res.render('index',allwines);
			
		  client.end();

	  });					 
  });					 
						 
	
   
};
