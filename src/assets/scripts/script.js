//----------------------------------------------------------------------------//
// Hero Gallery                                                               //
//----------------------------------------------------------------------------//
$(function()
{
	$('.spread .page input[type=radio]').on('change',function() {
		$page = $(this).parents('.page');
		$page.find('.page-turn').addClass('shown');
	});

	$('.spread .page.left').on('click',function() {
		$spread = parseInt($(this).parent().attr('data-spread'));
		if ( $spread > 1 ) {
			$('.book').removeClass('show-' + $spread)
		}
	});

	$('.spread-1 .img').on('click',function() {
		$('.book').addClass('show-2')
	});

	$('.spread-3 input[type=radio]').on('change',function() {
		$('.dietary').removeClass('hidden').addClass('shown');
	});

	$('.spread .page .page-turn').on('click',function() {
		$spread = parseInt($(this).parent().parent().attr('data-spread'));
		$page = $(this).parent();
		console.log($spread);
		$('.book').addClass('show-' + ($spread + 1));
		$page.find('.page-turn').removeClass('shown');
	});

});
