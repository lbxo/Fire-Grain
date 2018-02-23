jQuery(document).ready(function() {
    var offset = 250;
    var duration = 300;
     
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
        jQuery('.top__scroll').fadeIn(duration);
        } else {
        jQuery('.top__scroll').fadeOut(duration);
        }
        });
     
    jQuery('.top__scroll').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
        })
    });