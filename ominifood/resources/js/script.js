


$(document).ready(function () {
  /* sticky navigation */

    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else { 
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px'
          });
    /* scroll buttons */
    $('.js--scroll-to-plans').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function(){
      $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    /* navigation scroll */

 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}); 
/* animation on scrolls */

$('.js--wp-1').waypoint(function(direction){
   $('.js--wp-1').addClass('animated fadeIn');
},{
offset: '50%'
});

$('.js--wp-2').waypoint(function(direction){
  $('.js--wp-2').addClass('animated fadeInUp');
},{
offset: '50%'
});

$('.js--wp-3').waypoint(function(direction){
  $('.js--wp-3').addClass('animated fadeIn');
},{
offset: '50%'
});

$('.js--wp-4').waypoint(function(direction){
  $('.js--wp-4').addClass('animated zoomIn'); /* animated pulse for this*/
},{
offset: '50%'
});


  /* Mobile navigation */
  $('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-ion- ion-icon');
    
    nav.slideToggle(200);
    
    if (icon.hasClass('menu-outline')) {
        icon.addClass('close-outline');
        icon.removeClass('menu-outline');
    } else {
        icon.addClass('menu-outline');
        icon.removeClass('close-outline');
    }   

});
 
});/* mobile-nav  <ion-icon name="close-outline"></ion-icon>*/