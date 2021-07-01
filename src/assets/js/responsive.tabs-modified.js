/* -----------------------------------------
   MODIFIED FROM Responsive Tabs
   /assets/js/responsive.tabs-modified.js

   Look for // BEGIN MODIFICATION to see what was modified.

   https://github.com/openam/bootstrap-responsive-tabs
----------------------------------------- */

var fakewaffle = ( function ( $, fakewaffle ) {
    'use strict';

    // BEGIN MODIFICATION
    // WHY MODIFIED? We are nesting nav-tabs in navs-header (or possibly deeper, so 
    //     we need to find where the navs-body is located in relation to navs-tabs.
    function findNavsBody($tabGroup) {
		const $navsBody = $tabGroup.parent().find('.navs-body');
		
        return $navsBody.length > 0 ? $navsBody : findNavsBody($tabGroup.parent()); 
    }
    // END MODIFICATION

	fakewaffle.responsiveTabs = function ( collapseDisplayed ) {

		fakewaffle.currentPosition = 'tabs';

		// BEGIN MODIFICATION
		// WHY MODIFIED? We added nav-pills because we want them to be responsive too.
		var tabGroups = $( '.nav-tabs.responsive, .nav-pills.responsive' );
		// END MODIFICATION

		var hidden    = '';
		var visible   = '';
		var activeTab = '';

		if ( collapseDisplayed === undefined ) {
			collapseDisplayed = [ 'xs', 'sm' ];
		}

		$.each( collapseDisplayed, function () {
			hidden  += ' hidden-' + this;
			visible += ' visible-' + this;
		} );

		$.each( tabGroups, function () {
			var $tabGroup   = $( this );
			var tabs        = $tabGroup.find( 'li a' );
			var collapseDiv = $( '<div></div>', {
				'class' : 'panel-group responsive' + visible,
				'id'    : 'collapse-' + $tabGroup.attr( 'id' )
			} );

			$.each( tabs, function () {
				var $this          = $( this );
				var oldLinkClass   = $this.attr( 'class' ) === undefined ? '' : $this.attr( 'class' );
				var newLinkClass   = 'accordion-toggle';
				var oldParentClass = $this.parent().attr( 'class' ) === undefined ? '' : $this.parent().attr( 'class' );
				var newParentClass = 'panel panel-default';
				var newHash        = $this.get( 0 ).hash.replace( '#', 'collapse-' );

				if ( oldLinkClass.length > 0 ) {
					newLinkClass += ' ' + oldLinkClass;
				}

				if ( oldParentClass.length > 0 ) {
					oldParentClass = oldParentClass.replace( /\bactive\b/g, '' );
					newParentClass += ' ' + oldParentClass;
					newParentClass = newParentClass.replace( /\s{2,}/g, ' ' );
					newParentClass = newParentClass.replace( /^\s+|\s+$/g, '' );
				}

				if ( $this.parent().hasClass( 'active' ) ) {
					activeTab = '#' + newHash;
				}

				collapseDiv.append(
					$( '<div>' ).attr( 'class', newParentClass ).html(
						$( '<div>' ).attr( 'class', 'panel-heading' ).html(
							$( '<h2>' ).attr( 'class', 'panel-title' ).html(
								$( '<a>', {
									'class'       : newLinkClass,
                                    'data-toggle' : 'collapse',
                                    // BEGIN MODIFICATION
                                    // WHY MODIFIED? We want accordions to stay open on mobile when another is opened.
                                    // 'data-parent' : '#collapse-' + $tabGroup.attr( 'id' ),
                                    // END MODIFICATION
									'href'        : '#' + newHash,
									'html'        : $this.html()
								} )
							)
						)
					).append(
						$( '<div>', {
							'id'    : newHash,
							'class' : 'panel-collapse collapse'
						} )
					)
				);
			} );
			
			

            // BEGIN MODIFICATION
            // WHY MODIFIED? we are nesting nav-tabs in navs-header (or possibly deeper, so 
            //     we need to find where the navs-body is located.

            // $tabGroup.next().after( collapseDiv );
            const $navsBody = findNavsBody($tabGroup);
            $navsBody.after(collapseDiv);
            // END MODIFICATION

			$tabGroup.addClass( hidden );
			$( '.tab-content.responsive' ).addClass( hidden );
		} );



		fakewaffle.checkResize();
		fakewaffle.bindTabToCollapse();

		// BEGIN MODIFICATION
		// WHY MODIFIED? We want the accordions on mobile to start out closed.
		// if ( activeTab ) {
		// 	$( activeTab ).collapse( 'show' );
		// }
		// END MODIFICATION
	};

	fakewaffle.checkResize = function () {

		if ( $( '.panel-group.responsive' ).is( ':visible' ) === true && fakewaffle.currentPosition === 'tabs' ) {
			fakewaffle.tabToPanel();
			fakewaffle.currentPosition = 'panel';
		} else if ( $( '.panel-group.responsive' ).is( ':visible' ) === false && fakewaffle.currentPosition === 'panel' ) {
			fakewaffle.panelToTab();
			fakewaffle.currentPosition = 'tabs';
		}

	};

	fakewaffle.tabToPanel = function () {

		// BEGIN MODIFICATION
		// WHY MODIFIED? We added nav-pills because we want them to be responsive too.
		var tabGroups = $( '.nav-tabs.responsive, .nav-pills.responsive' );
		// END MODIFICATION

		$.each( tabGroups, function ( index, tabGroup ) {

            // Find the tab

            // BEGIN MODIFICATION
            // WHY MODIFIED? we are nesting nav-tabs in navs-header and navs-body, which is one level 
            //     deeper than default Bootstrap structure.
            // var tabContents = $( tabGroup ).next( '.tab-content' ).find( '.tab-pane' );
            var tabContents = findNavsBody($(tabGroup)).find('.tab-pane');
            // END MODIFICATION


			$.each( tabContents, function ( index, tabContent ) {
				// Find the id to move the element to
				var destinationId = $( tabContent ).attr( 'id' ).replace ( /^/, '#collapse-' );

				// Convert tab to panel and move to destination
				$( tabContent )
                    .removeClass( 'tab-pane' )
                    // BEGIN MODIFICATION
                    // WHY MODIFIED? Fade needs to be removed from panels, b/c panels do not show
                    //     faded content by default, so it remains hidden if fade class is present.
                    .removeClass('fade')
                    // END MODIFICATION
					.addClass( 'panel-body' )
                    .appendTo( $( destinationId ) );

                    
                // BEGIN MODIFICATION
                // WHY MODIFIED? We want accordions to start closed on mobile.
                var $panelBodyContainer = $(destinationId);
                $panelBodyContainer.removeClass('in').attr('aria-expanded', false);
                $panelBodyContainer.parent().find('.accordion-toggle').attr('aria-expanded', false).addClass('collapsed');
                $panelBodyContainer.find('.panel-body').removeClass('active');
                // END MODIFICATION

			} );

		} );

	};

	fakewaffle.panelToTab = function () {

		var panelGroups = $( '.panel-group.responsive' );

		$.each( panelGroups, function ( index, panelGroup ) {

            var destinationId = $( panelGroup ).attr( 'id' ).replace( 'collapse-', '#' );
            
            // BEGIN MODIFICATION
            // WHAT WAS MODIFIED? Added .parent() and .next('.navs-body'), and changed .next() to .find()
            // WHY MODIFIED? we are nesting nav-tabs in navs-header and navs-body, which is one level 
            //     deeper than default Bootstrap structure.
            // var destination = $( destinationId ).next( '.tab-content' )[ 0 ];
            var destination = findNavsBody($(destinationId)).find('.tab-content')[0];
            // END MODIFICATION
			

			// Find the panel contents
			var panelContents = $( panelGroup ).find( '.panel-body' );

			// Convert to tab and move to destination
			panelContents
				.removeClass( 'panel-body' )
                .addClass( 'tab-pane' )
                // BEGIN MODIFICATION
                // WHY MODIFIED? Fade is removed when adding content to panels, so we need to add it
                //     back when switching back to tabs.
                .addClass( 'fade' )
                // END MODIFICATION
                .appendTo( $( destination ) );

            // BEGIN MODIFICATION
            // WHY MODIFIED? We want the first tab to be open when switching from mobile to desktop view.
            var tabBodies = $( '.tab-content.responsive' );
            
            $.each( tabBodies, function ( index, tabBody ) {
                $(tabBody).find('.tab-pane').first().addClass('active in');
            });

			// BEGIN MODIFICATION
			// WHY MODIFIED? We added nav-pills because we want them to be responsive too.
			var tabTitles = $( '.nav-tabs.responsive, .nav-pills.responsive' );
			// END MODIFICATION

            $.each( tabTitles, function ( index, tabTitle ) {
                var tabs = $(tabTitle).find('li');
                $.each( tabs, function(index, tab) {
                    if (index === 0) {
                        $(tab).addClass('active');
                    } else {
                        $(tab).removeClass('active');
                    }
                });
            });
            // END MODIFICATION

		} );

	};

	fakewaffle.bindTabToCollapse = function () {

		// BEGIN MODIFICATION
		// WHY MODIFIED? We added nav-pills because we want them to be responsive too.
		var tabs     = $( '.nav-tabs.responsive, .nav-pills.responsive' ).find( 'li a' );
		// END MODIFICATION

		var collapse = $( '.panel-group.responsive' ).find( '.panel-collapse' );

		// Toggle the panels when the associated tab is toggled
		tabs.on( 'shown.bs.tab', function ( e ) {
			var $current  = $( e.currentTarget.hash.replace( /#/, '#collapse-' ) );
            $current.collapse( 'show' );

			if ( e.relatedTarget ) {
				var $previous = $( e.relatedTarget.hash.replace( /#/, '#collapse-' ) );
				$previous.collapse( 'hide' );
			}
		} );

		// Toggle the tab when the associated panel is toggled
		collapse.on( 'shown.bs.collapse', function ( e ) {

            // Activate current tabs
            // BEGIN MODIFICATION
            // WHY MODIFIED? We want accordions to stay open when another is opened.
            // var current = $( e.target ).context.id.replace( /collapse-/g, '#' );
            // $( 'a[href="' + current + '"]' ).tab( 'show' );

			// Update the content with active
			// var panelGroup = $( e.currentTarget ).closest( '.panel-group.responsive' );
			// $( panelGroup ).find( '.panel-body' ).removeClass( 'active' );
            // $( e.currentTarget ).find( '.panel-body' ).addClass( 'active' );
            // END MODIFICATION
        } );
        
	};

	$( window ).resize( function () {
		fakewaffle.checkResize();
	} );

	return fakewaffle;
}( window.jQuery, fakewaffle || { } ) );
