var pg = require('pg');

exports.add = function(req, res){

  
  
	console.log("New Wine Data to store in database");
  //console.log(req.query.url);
  console.log(req.query.name);
  console.log(req.query.winery);
  console.log(req.query.varietal);
  
  pg.connect(process.env.DATABASE_URL, 
	           function(err, client) {
               var query = client.query('Insert Into AllWines values($1,$2,$3,$4) RETURNING name',[req.query.name,req.query.verietal,req.query.winery,'/images/default0.jpg'],
	                                       function(err,result){
                                           if(err){
                                             console.log(err);
															             }
															             else {
                                             console.log('row inserted with ' + result.rows[0].name);
                                           }
															             client.end();
													               });
														 

    
             });
  var new_wine = {'new_wine':[]};
	new_wine['new_wine'].push({'wine':req.query.name});
	res.render('admin_enter_wine',new_wine);

};
