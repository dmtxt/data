(function($) {
 "use strict";
$('#collapsingNavbar li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggler:visible').click();
    });
})(jQuery);