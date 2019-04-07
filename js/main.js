jQuery(document).ready(function($){
    var isLateralNavAnimating = false;
    
    //open/close lateral navigation
    $('.cd-nav-trigger').on('click', function(event){
        event.preventDefault();
        //stop if nav animation is running 
        if( !isLateralNavAnimating ) {
            if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
            
            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                //animation is over
                isLateralNavAnimating = false;
            });
        }
    });

    $('.cd-primary-nav-link').on('click', function(event){
        event.preventDefault();
        //stop if nav animation is running 
        if( !isLateralNavAnimating ) {
            if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
            
            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                //animation is over
                isLateralNavAnimating = false;
            });
        }
    });

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

    $(".featuresnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#what-to-expect").offset().top
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

    $(".signupnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#sign-up").offset().top
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