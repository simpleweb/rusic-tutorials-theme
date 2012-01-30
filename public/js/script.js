$(document).ready(function(){

	// Fade out alert messages
	$('.flash.alert-message').delay(2000).fadeOut('slow');
	// Fade in login prompt
	$('#user-block .alert-message.tip').hide().delay(1000).fadeIn('slow');

	// cache container
	var $container = $('#recipes-list');
	// initialize isotope
	$container.imagesLoaded( function(){
	$container.isotope({
		layoutMode: 'masonry',
		itemSelector : '.teaser'
	});
	});

	// filter items when filter link is clicked
	$('#order-by a').click(function(){
	var selector = $(this).attr('data-filter');
	$container.isotope({ filter: selector });
	return false;
	});

});