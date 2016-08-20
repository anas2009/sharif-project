$(document).ready(function(){
	$("#pop-btn").on("click", function(){
	  $( ".model-popup" ).slideDown( "slow", function() {});
	});

	$("#close-btn").on("click", function(){
	  $( ".model-popup" ).slideUp( "slow", function() {});
	});	
});
