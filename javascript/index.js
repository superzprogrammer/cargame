$(document).ready(function(){
	$('.slideshow').cycle({
		fx:'fade'
	});

	$('#clock').countdown('60:00', function(event) {
	   $(this).html(event.strftime('seconds %S'));
	});
});


