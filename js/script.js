$(document).ready(function(){

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