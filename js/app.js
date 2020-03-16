$(function() {


	$('.j-slick').slick({
		autoplay: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});


// $('.j-carousel').slick({
// 		autoplay: true,
// 		infinite: true,
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		dots: true,
// 		arrows: false
// 	});


$(document).on('click', '.j-abo', function(e){

		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#about').offset().top - 10
		}, 1000);
	});


$(document).on('click', '.j-pro', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#projects').offset().top - 10
		}, 1000);
	});


});