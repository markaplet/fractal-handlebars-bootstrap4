((($) => {
	'use strict';
	/**
	 * Utility for toggeling all accordions at once
	 *
	 * @author Muir Adams <muir.adams@symsoftsolutions.com>
	 * 
	 * Looks for a button with class "accordion-toggle" and changes the aria-expanded state
	 * depending upon whether or not any accordions are open.
	 */

	$(document).ready(function() {
		function setToggleExpanded(aId) {
			var $toggleButton = $('button[accordion-id="' + aId + '"]');

			$toggleButton.attr('aria-expanded', 'true');
		};

		function setToggleCollapsed(aId) {
			var $toggleButton = $('button[accordion-id="' + aId + '"]');

			$toggleButton.attr('aria-expanded', 'false');
		};

		// Initially set toggle button depending upon if any items are expanded
		var accordionToggles = $('button.accordion-toggle');

		accordionToggles.each(function() {
			var accordionId = $(this).attr('accordion-id');
			var numPanelOpen = $(accordionId + ' .collapse.in').length;

			if (numPanelOpen === 0) {
				setToggleCollapsed(accordionId);
			} else {
				setToggleExpanded(accordionId);
			}
		});

		// Open panels and change Expand/Collapse All text when Expand/Collapse All text is clicked
		$('.accordion-toggle').on('click', function() {
			var accordionId = $(this).attr('accordion-id');
			var numPanelOpen = $(accordionId + ' .collapse.in').length;

			if (numPanelOpen === 0) {
				$(accordionId + ' .panel-collapse:not(".in")').collapse('show').attr('aria-expanded', 'true');
				setToggleCollapsed(accordionId);
			} else {
				$(accordionId + ' .panel-collapse.in').collapse('hide').attr('aria-expanded', 'false');
				setToggleExpanded(accordionId);
			}
		});

		// Change Expand/Collapse All text when a single item is expanded or collapsed
		$('.panel-collapse').on('shown.bs.collapse hidden.bs.collapse', function() {
			var accordionId = '#' + $(this).closest('.panel-group').attr('id');
			var numPanelOpen = $(accordionId + ' .collapse.in').length;

			if (numPanelOpen === 0) {
				setToggleCollapsed(accordionId);
			} else {
				setToggleExpanded(accordionId);
			}
		});
	});

})(jQuery));
