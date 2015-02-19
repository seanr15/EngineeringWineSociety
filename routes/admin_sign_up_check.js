exports.check = function(req, res){
    console.log('new user to add to table'); 
    console.log(req.body.firstname);     
    console.log(req.body.lastname);     
    console.log(req.body.email);     
    console.log(req.body.password);   
		
    res.redirect('admin_sign_up_success');
};
