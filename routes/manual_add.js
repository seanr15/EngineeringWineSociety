var pg = require('pg');

exports.add = function(req, res){

  
  console.log("New Wine Data to store in database");
  //console.log(req.query.url);
  console.log(req.body.name);
  console.log(req.body.winery);
  console.log(req.body.varietal);
  /*
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
  var new_wine = {'new_wine':[]};
	new_wine['new_wine'].push({'wine':req.query.wine});
	res.render('admin_enter_wine',new_wine);

	
*/
  res.redirect('admin_enter_wine');
   
};
