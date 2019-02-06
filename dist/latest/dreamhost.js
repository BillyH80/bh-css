/**
 * DreamHost.css Custom Javascript
 *
 * Usage:
 * - Use the `dh_css` namespace to make sure custom JS doesn't ram into anything else!
 * - For components, create a new `var Component_name` in the namespace below
 * - Use a `.load()` method with an exit condition to improve performance
 * - Put all jQuery events in a separate `.events` method
 * - Call the `Component.load()` function in `dh_css.init`
 * - Comments also added inline in Accordion component for demo
 *
 * Not certain how to follow these conventions?
 * Just follow one of the vars someone else wrote, or just ask someone!
 *
**/

(function(dh_css, $) {

	// Place all component loaders in here
	dh_css.init = function() {
		Tabs.load();
	}

	var Tabs = {
		load: function() {
			if(!$('.Tabs').length) return;
			Tabs.events();
		},
		events: function() {
			$('.Tabs__nav-item').on('click', function() {
				var $this = $(this);

				// use parent to keep tab functionality scoped on pages with multiple tab components
				var $parent = $this.closest('.Tabs');
				var tab = $this.data('tab');

				// sets active tab nav link
				$('.Tabs__nav-item', $parent).removeClass('is-active');
				$this.addClass('is-active');

				// sets active tab
				$('.Tab', $parent).removeClass('is-active');
				$('.Tab[data-tab="' + tab + '"]').addClass('is-active');
			});
		}
	}

	window.onload = dh_css.init();

})(window.dh_css = window.dh_css || {}, jQuery);

// Popovers
$(document).on('click', '.js-toggle-popover', function (e) {
	var $this = $(this),
		$thisPopover = $this
			.parent()
			.children('.Popover');

	$('.js-toggle-popover').not($this).removeClass('is-open');
	$thisPopover.toggleClass('is-open');
	$this.toggleClass('is-open');
	$('.Popover').not($thisPopover).removeClass('is-open');

	e.stopPropagation();
});

$(document).on('mouseover', '.on-hover', function () {
	$(this).find('.js-toggle-popover').addClass('is-open');
});

$(document).on('mouseout', '.on-hover', function () {
	$('.on-hover')
		.find('.js-toggle-popover')
		.removeClass('is-open');
});

$(document).on('click', '.Popover', function (e) {
	e.stopPropagation();
});

$(document).on('click', function (e) {
	$('.Popover, .js-toggle-popover').removeClass('is-open');
});

$(document).on('click', '.js-menu-toggle', function(e) {
	$('.PageHeader').toggleClass('menu-is-open');
});
