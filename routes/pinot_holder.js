var pg = require('pg');

exports.view = function(req, res){

  console.log("New Wine Data to View");
  console.log(req.query.wine);
  



	 var thiswine={'thiswine':[]};
   pg.connect(process.env.DATABASE_URL, function(err, client) {
   var query = client.query('SELECT * FROM AllWines Where name=$1',[req.query.wine]);
    
    query.on('row', function(row,result) {
      console.log(JSON.stringify(row));
		  thiswine['thiswine'].push(row);
			
    });
	  query.on('end',function(result){
	    console.log(thiswine);
			//render here for data
			var i = 0;
			for (var wine_row in thiswine['thiswine']) {
        thiswine['thiswine'][wine_row]['id']=i;
				i = i + 1;

      }
    	res.render('pinot_holder',thiswine);
			
		  client.end();

	  });					 
  });

	
  //res.render('pinot_holder');
  
  
};
