$(document).ready(function() {
    var offset = 120;
    var duration = 500;
     
$(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
        $('.top__scroll').fadeIn(duration);
        } 
    else {
        $('.top__scroll').fadeOut(duration);
        }
    });
    
$('.top__scroll').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
    })
});