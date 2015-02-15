
exports.process_logout = function(req, res){
  req.session.destroy();
	res.redirect('/');
};
