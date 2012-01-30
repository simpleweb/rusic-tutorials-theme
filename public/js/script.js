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

	function attachLiking() {
    
    $('a.likes', 'div.meta, #actions').on('click', function() {

        var likeLink = $(this);

        $.post(likeLink.attr('href'), function(data) {
          $('body').append('<div class="alert-message success prompt">Thanks for liking the picture!</div>');
          likeLink.replaceWith('<span class="liked">' + (parseInt(likeLink.html())+1) + '</span>');
          removeAlerts();
        });

        return false;
    });
    
}

});