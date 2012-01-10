$(document).ready(function(){

	// Fade in login prompt
	$('#user-block .alert-message.tip').hide().delay(1000).fadeIn('slow');
	// Fade out alert messages
	$('.flash.alert-message').delay(2000).fadeOut('slow');
	// Comments form
	$('#comments-form').hide().slideIn('slow');



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