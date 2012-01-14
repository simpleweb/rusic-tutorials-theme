$(document).ready(function(){

	// Fade out alert messages
	$('.flash.alert-message').delay(2000).fadeOut('slow');
	// Fade in login prompt
	$('#user-block .alert-message.tip').hide().delay(1000).fadeIn('slow');

	// Masonry stack magic
	var $container = $('#recipes-list');
	$container.imagesLoaded( function(){
	  $container.masonry({
	  	columnWidth: 20, 
	    itemSelector : '.teaser'
	  });
	});

	// Add alt margins to popular widget
    $('#recipes-list .teaser').filter(function(index){
    return (index%3 == 2);
    }).addClass('last');

});