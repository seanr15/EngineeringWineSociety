



exports.process = function(req, res){


    console.log('Log in info to look up');
    

		
    console.log(req.body.user.email);
    console.log(req.body.user.password);
  
		res.redirect('index');
};

