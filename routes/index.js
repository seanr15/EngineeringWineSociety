var pg = require('pg');

exports.view = function(req, res){

   var allwines={'allwines':[]};
   pg.connect(process.env.DATABASE_URL, function(err, client) {
   var query = client.query('SELECT * FROM AllWines');
    
    var i = 0;
    query.on('row', function(row,result) {
      console.log(JSON.stringify(row));
		  allwines['allwines'].push(row.push({'id':i++}));
			
    });
	  query.on('end',function(result){
	    console.log(allwines);
			//render here for data
    	res.render('index',allwines);
			
		  client.end();

	  });					 
  });
  
};
