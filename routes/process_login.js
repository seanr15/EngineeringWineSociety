



exports.process = function(req, res){


    console.log('Log in info to look up');
    

		
    console.log(req.body.email);
    console.log(req.body.password);
  
		res.redirect('index');
};

