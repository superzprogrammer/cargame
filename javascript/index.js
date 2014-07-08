$(document).ready(function(){
	$('.slideshow').cycle({
		fx:'fade',
		speed:500,
		timeout: 30000
	});

	$('#clock').timeTo(30, function(){
		$('#clock').timeTo(30);
	});
});


