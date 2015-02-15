exports.view = function(req, res){
  
	console.log("User info to look up");
  console.log(req.query.email);
	console.log(req.query.pass);
	res.redirect('index');
	};

	
   

