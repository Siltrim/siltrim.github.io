;

$(document).ready(function() {
	
	//Slider's Home
	$('.js-index-slider').bxSlider({
		pagerCustom: '.js-index-slider__pager',
		controls: false,
		speed: 1000
	});

	//Slider's product(preview)
	$('.product-item__slider').bxSlider({
		pagerCustom: '.product-item__colors',
		controls: false,
		speed: 1000
	});

	$('.sizes-list li').click(function() {
		$(this).toggleClass('active');
		$(this).siblings().removeClass('active');
	});

	//Slider's product
	$('.js-product-view-slider').bxSlider({
		pagerCustom: '.js-product-view-pager',
		controls: false,
		speed: 1000
	});

	

});
