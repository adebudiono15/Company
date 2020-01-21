$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({scrollTop: elemenTujuan.offset().top - 55
 }, 1250, 'easeInOutExpo');

 e.preventDefault();
});

// paralax
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron .display-4').css({
		'transform' : 'translate(0px, '+ wScroll/1 +'%)'
	});	

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/0.5 +'%)'
	});	
});