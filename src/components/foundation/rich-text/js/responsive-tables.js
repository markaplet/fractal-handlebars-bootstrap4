((($) => {
	'use strict';
	/**-----------------------------------------------------------------
	 * Responsive Tables
	 * 
	 * This makes all tables within rich-text responsive by adding
     * a wrapper around the table with .table-resonsive class, and it
     * adds the class .table to the table so it takes on the proper
     * styling.
     * 
     * NOTE: This function does not make tables accessible. That has
     * to be done manually.
	 * 
	 * Author <Muir Adams - SymSoft Solutions>
	 -----------------------------------------------------------------*/
	
    const $richText = $('.rich-text');
    
    if ($richText.length > 0) {
        const $tables = $richText.find('table');

        $tables.each(function() {
            const $table = $(this);

            if (!$table.hasClass('table')) $table.addClass('table');
            if (!$table.parent().hasClass('table-responsive')) $table.wrap('<div class="table-responsive"></div>');
        });
    }
})(jQuery));
