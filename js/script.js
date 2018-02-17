$(document).ready(function() { 
	$('#codes').click(function() {
		$(this).toggleClass('active');
	});

	$('#codes').click(function(e) {
		$('#sub-menu').slideToggle();
		e.stopPropagation();
	});
	$(document).click(function() {
		$('#codes').removeClass('active');
		$('#sub-menu').hide();
	});
});