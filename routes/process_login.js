exports.process = function(req, res){
    console.log('Log in info to look up');
    

		
    console.log(req.query.email);
    console.log(req.query.pass);
  
		res.redirect('index');
};

