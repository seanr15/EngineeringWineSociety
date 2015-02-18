

$(document).ready(function() {
  console.log("ready to run modal");
  $('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  //var name1 = button.data('name'); // Extract info from data-* attributes
	//var winery = button.data('winery');
	//var varietal = button.data('varietal');
	//console.log("try 1" + name1)
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  /*var modal = $(this);
  modal.find('.modal-title').text('Add Wine');
  var form =  modal.find('.modal-body form').val(add_wine);
	console.log("try 2" + form);*/

	   
		 ///adding click to primary button '#add'
	   /*$('#add').click(//callback
		   function(){
			   form.submit();
     });*/
		 /////

		 /*$('#add').click(function(){
         var data = $.parseJSON($(this).attr('data-button'));
         console.log('selected modal form');
         console.log(data);
				 
				 
     });*/


	
  });
	
});
