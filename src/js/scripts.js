/**
 * Custom Javascript
 *
 * Usage:
 * - Use the `bh` namespace to make sure custom JS doesn't ram into anything else!
 * - For components, create a new `var Component_name` in the namespace below
 * - Use a `.load()` method with an exit condition to improve performance
 * - Put all events in a separate `.events` method
 * - Call the `Component.load()` function in `dh_css.init`
 * - Comments also added inline in Accordion component for demo
 *
 * Not certain how to follow these conventions?
 * Just follow one of the vars someone else wrote, or just ask someone!
 *
**/

(function(bh) {

	// Place all component loaders in here
	bh.init = function() {
		Tabs.load();
	}

	var Tabs = {
		load: function() {
			var $tabs = document.querySelectorAll('.Tabs');
			if(!$tabs.length) return;
			Tabs.events();
		},
		utils: {
			add_active_class: function(array, target_value, class_name) {
				array.forEach(function(item) {
					if(item.dataset.tab != target_value) return;
					item.classList.add(class_name);
				});
			}
		},
		events: function() {
			document.addEventListener('click', function(e) {
				if(!e.target.matches('.Tabs__nav-item')) return;
				e.preventDefault();

				var clicked_link = e.target.dataset.tab;
				var parent = e.target.closest('.Tabs');
				var active_elements = parent.querySelectorAll('.is-active');

				var tab_links = parent.querySelectorAll('.Tabs__nav-item');
				var tabs = parent.querySelectorAll('.Tab');

				active_elements.forEach(function(element) {
					element.classList.remove('is-active');
				});

				Tabs.utils.add_active_class(tab_links, clicked_link, 'is-active');
				Tabs.utils.add_active_class(tabs, clicked_link, 'is-active');

			}, false);
		}
	}

	window.onload = bh.init();

})(window.bh = window.bh || {});
