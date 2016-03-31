$(document).ready(function() {


	$('.toggle-values-display').on('click', function() {
		if ( $(this).hasClass("open") ) {
			$(this).addClass("closed");
			$(this).removeClass("open");

			$(this).parents('.property-section').addClass('closed');
		} else {
			$(this).addClass("open");
			$(this).removeClass("closed");

			$(this).parents('.property-section').removeClass('closed');
		}
	})

})