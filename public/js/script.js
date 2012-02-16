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

    // AJAXIFY LIKE BUTTONS
    $('.likes').click(function(){
	    var button = this;

	    $(this).addClass('disabled');

	    $.post($(this).attr('the_link'), function(data) {
	      if(data.valid){
	        $(button).find(".likecount").html(''+data.likes_count+'');
	        $(button).removeClass('disabled');
	        $(button).removeClass('likes');
	        $(button).addClass('liked');
	      }else{
	        alert(data.message);
	        $(button).removeClass('disabled');
	      }
	    }, 'json');
  	});
  	
  	// FORMS VALIDATION
  	$("#entry_form").validate();

});