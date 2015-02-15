



exports.process = function(req, res){


    console.log('Log in info to look up');
    

		
    console.log(req.query.email);
    console.log(req.query.password);
  
		res.redirect('index');
};

