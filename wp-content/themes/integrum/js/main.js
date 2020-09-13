$(document).ready(function() {
	$('#quotes').cycle({
		fx: 'fade',
		timeout: 5000,
		after: function(currSlideElement, nextSlideElement, options, forwardFlag) {
			$('.box.active').each(function() {
				$(this).removeClass('active');
			});
			var new_slide = $(nextSlideElement).attr('id').replace('quote-', '');
			$('.' + new_slide).addClass('active');
		}
	})
});