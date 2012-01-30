$(document).ready(function(){

	// Fade out alert messages
	$('.flash.alert-message').delay(2000).fadeOut('slow');
	// Fade in login prompt
	$('#user-block .alert-message.tip').hide().delay(1000).fadeIn('slow');



	// cache container
	var $container = $('#recipes-list');
	// initialize isotope
	$container.isotope({
		layoutMode: 'masonryHorizontal',
		columnWidth: 20, 
		itemSelector : '.teaser'
	});

	// filter items when filter link is clicked
	$('#filters a').click(function(){
	var selector = $(this).attr('data-filter');
	$container.isotope({ filter: selector });
	return false;
	});




	// Add alt margins to popular widget
    $('#recipes-list .teaser').filter(function(index){
    return (index%3 == 2);
    }).addClass('last');

});