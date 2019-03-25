$(document).ready(function(){
    var mn = $(".navbar");
    mns = "scrolled";
    hdr = 24;

    $(window).scroll(function() {
      if( $(this).scrollTop() > hdr ) {
        mn.addClass(mns);
      } else {
        mn.removeClass(mns);
      }
    });
    
    new WOW().init();

    $(".homenav").click(function() {
        $('html, body').animate({
            scrollTop: $("#intro").offset().top
        }, 200);
    });

    $(".aboutnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 200);
    });

    $(".projectsnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 200);
    });

    $(".contactnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 200);
    });

    $(".feedbacknav").click(function() {
        $('html, body').animate({
            scrollTop: $("#feedback").offset().top
        }, 200);
    });

    $('.navbar-toggler').click(function(){
        $(this).toggleClass('show');
    });

    $('.nav-link').click(function(){
        $('.navbar-toggler').removeClass('show');
        $('.navbar-collapse').removeClass('show');
    });

    document.getElementById("defaultOpen").click();
});