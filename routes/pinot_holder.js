
exports.view = function(req, res){

  console.log("New Wine Data to View");
  console.log(req.query.url);
  console.log(req.query.wine);
  console.log(req.query.varietal);
  console.log(req.query.vineyard);
  res.render('pinot_holder');
  
  
};
