'use strict';


function httpGet(winery,varietal)
{
    var xmlHttp = null;
    
  var search = winery + '+' + varietal;
  console.log(search);

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( 'GET', 'http://services.wine.com/api/beta/service.svc/json/catalog?search=' + winery+'+'+varietal + '&apikey=2817cb958835ff3537c87ff4cf0e9e4e', false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}


function selectWine(i){

}



function parseJSON(wine) {

  var obj = JSON.parse(wine);

  var i = 0;

  $('#wine_table').append('<tr><th><center>Label</center></th><th><center>Name</center></th><th><center>Varietal</center></th><th><center>Winery</center></th><th><center>Submit</center></th></tr>');
  
	
								 
								 
								 
  
	 
  
  for (i = 0; i < obj.Products.List.length; i++) { 

  
	  var cray = [];

    var label = '<tr id="wine_row'+i+'" ><td><center><img src = ' + obj.Products.List[i].Labels[0].Url + ' width = "100" height = "160"></center></td>';
    var name = '<td><center>' + obj.Products.List[i].Name + '</center</td>';
    var varietal = '<td><center>' + obj.Products.List[i].Varietal.Name + '</center></td>';
    var vineyard = '<td><center>' + obj.Products.List[i].Vineyard.Name + '</center></td>';
		var beg_form='<td><form method="get" action="/log_all_wine_json" class="row_form" id="'+i+'" >'+
	               '<input type="hidden" name="url" value="'+obj.Products.List[i].Labels[0].Url+'" ></input>'+
	               '<input type="hidden" name="wine" value="'+obj.Products.List[i].Name+'" ></input>'+
	               '<input type="hidden" name="varietal" value="'+obj.Products.List[i].Varietal.Name+'" ></input>'+
	               '<input type="hidden" name="vineyard" value="'+obj.Products.List[i].Vineyard.Name+'" ></input>';


		
		var select = '<center><input type="submit" name="sub" value="Choose Wine" ></input></center></form></td></tr>';
    
    $('#wine_table').append(label + name + varietal + vineyard +beg_form+ select );

    $("#wine_row"+i).click(function(){
                                   	var projectID = $(this).closest('.row_form').attr('id');
	                                  var id = projectID.substr('row_form'.length);
		                                console.log("row click handler running " + id);
																		
                            });





		
    
  }
  
	//$('#wine_table > tbody > tr').click(selectWine);
	

}




function changeStuff(e) {

  e.preventDefault();
  console.log('In changeStuff');
  var winery = $('#winery').val();
  var varietal = $('#varietal').val();
  console.log(winery);
  console.log(varietal);

  /*var search = winery + "+" + varietal;
  console.log(search);

  var url = "http://services.wine.com/api/beta/service.svc/json/catalog?search=" + search + "&apikey=2817cb958835ff3537c87ff4cf0e9e4e";*/


  var wine = httpGet(winery,varietal);

  //console.log(wine);

  parseJSON(wine);

  
}
/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

 }



// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  console.log("ready to run");
	$('#submitBtn').click(changeStuff);
	


})



