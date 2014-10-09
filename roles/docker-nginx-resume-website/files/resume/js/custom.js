 /* Scroll to GoTop */

$(".gotop").hide();

$(function(){
	$(window).scroll(function(){
	  if ($(this).scrollTop()>250)
	  {
		$('.gotop').fadeIn();
	  } 
	  else
	  {
		$('.gotop').fadeOut();
	  }
	});

	$('.gotop a').click(function (e) {
	  e.preventDefault();
	  $('body,html').animate({scrollTop: 0}, 500);
	});

});

/* Scroll Ends */