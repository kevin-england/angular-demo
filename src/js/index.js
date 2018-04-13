$(document).ready(function() {
    /*Navbar active class function to toggle active class*/
    $.each($('.nav-wrapper').find('li'), function() {
        $(this).toggleClass('active', 
            window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
    }); 

    /*Materialize Functions*/
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.collapsible').collapsible();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.slider').slider({
        height: 500,
    });

    /*Side nav close button function*/
    $('.side-nav-close').click(function() {
      $('.button-collapse').sideNav('hide');
    });

    /* Materialize FeatureDiscovery Component */
    $('.blurb').click(function() {
        $('.tap-target').tapTarget('open');
    })

    /*Materialize Pushpin Component*/
    $('.pushpin').each(function() {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
          top: $target.offset().top,
          bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
    });

    /* Materialize ScrollFire Component*/
    var options = [
      {selector: '#staggered-test', offset: 50, callback: function(el) {
        Materialize.toast("This is our ScrollFire Demo!", 1500 );
      } },
      {selector: '#staggered-test', offset: 205, callback: function(el) {
        Materialize.toast("Please continue scrolling!", 1500 );
      } },
      {selector: '#staggered-test', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } },
      {selector: '#image-test', offset: 500, callback: function(el) {
        Materialize.fadeInImage($(el));
      } }
    ];
    Materialize.scrollFire(options);
        
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 100) {
    $('.scroll-show').fadeIn();
  } else {
    $('.scroll-show').fadeOut();
  }
});