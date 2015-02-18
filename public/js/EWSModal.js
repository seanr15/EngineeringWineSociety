

$(document).ready(function() {
  console.log("ready to run modal");
  $('#exampleModal').on('show.bs.modal', function (event) {
  //var button = $(event.relatedTarget); // Button that triggered the modal
  //var recipient = button.data('whatever'); // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  //var modal = $(this);
  //modal.find('.modal-title').text('Add Wine');
  //var name =  modal.find('.modal-body input').val(name);

	   
		 ///adding click to primary button '#add'
	   $('#add').click(//callback
		   function(){
         console.log('selected modal form');
			   $('#add_wine').submit();
     });
		 /////


	
  });
	
});
