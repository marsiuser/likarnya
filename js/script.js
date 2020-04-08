$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoplay: true
    });
    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    $(function() {
        $('.main-menu [href]').each(function() {
          if (this.href == window.location.href) {
            $(this).addClass('active_tab');
          }
        });
      });
});