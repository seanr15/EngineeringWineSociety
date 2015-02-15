var pg = require('pg');
var bcrypt = require('bcrypt');


exports.process = function(req, res){
    console.log('Log in info to look up');
    

		
    console.log(req.query.username);
    console.log(req.query.pass);
    console.log(req.query.newuser);
		
	 /*	
   var thiswine={'thiswine':[]};
   pg.connect(process.env.DATABASE_URL, function(err, client) {
   var query = client.query('SELECT * FROM USERS Where username=$1 AND phash=crypt($1, phash)',[req.query.username,req.query.pass]);
    
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

*/
  
		res.redirect('index');
};

