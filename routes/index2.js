var pg = require('pg');

exports.view = function(req, res){

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
			var i = 0;
			for (var wine_row in allwines['allwines']) {
        allwines['allwines'][wine_row]['id']=i;
				i = i + 1;

      }
    	res.render('index',allwines);
			
		  client.end();

	  });					 
  });
  
};

