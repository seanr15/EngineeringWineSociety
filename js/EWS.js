'use strict';


function httpGet(theUrl)
{
    var xmlHttp = null;

    console.log(theUrl);
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function parseJSON(wine) {

  var obj = JSON.parse(wine);

  var i = 0;

  $("#wine_table").append("<tr><th><center>Label</center></th><th><center>Name</center></th><th><center>Varietal</center></th><th><center>Winery</center></th></tr>");
  
  for (i = 0; i < obj.Products.List.length; i++) { 

    var label = "<tr><td><center><img src = " + obj.Products.List[i].Labels[0].Url + " width = '100' height = '160'></center></td>";
    var name = "<td><center>" + obj.Products.List[i].Name + "</center</td>";
    var varietal = "<td><center>" + obj.Products.List[i].Varietal.Name + "</center></td>";
    var vineyard = "<td><center>" + obj.Products.List[i].Vineyard.Name + "</center></td></tr>";

    $("#wine_table").append(label + name + varietal + vineyard);
    
  }





}



function changeStuff(e) {

  e.preventDefault();
  console.log("In changeStuff");
  var winery = $("#winery").val();
  var varietal = $("#varietal").val();
  console.log(winery);
  console.log(varietal);

  var search = winery + "+" + varietal;
  console.log(search);

  var url = "http://services.wine.com/api/beta/service.svc/json/catalog?search=" + search + "&apikey=2817cb958835ff3537c87ff4cf0e9e4e";

  console.log(url);

  var wine = httpGet(url);

  //console.log(wine);

  parseJSON(wine);
  


}
/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

        console.log("hola");
	$("#submitBtn").click(changeStuff);
}



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
        console.log("ready to run");
	initializePage();

})



