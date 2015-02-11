var pg = require('pg');

exports.view = function(req, res){

  var cars={'cars':[]};
   pg.connect(process.env.DATABASE_URL, function(err, client) {
   var query = client.query('SELECT * FROM test_tab');
    

    query.on('row', function(row,result) {
      console.log(JSON.stringify(row));
		  cars['cars'].push(row);
    });
	  query.on('end',function(result){
	    console.log(cars);
    	res.render('index',cars);
			
		  client.end();

	  });					 
  });

};
