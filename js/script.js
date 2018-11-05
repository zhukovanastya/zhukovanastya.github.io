new WOW().init();

$(document).ready(function(){
  $(".navbar-collapse a").click(function() {
    if (window.matchMedia('screen and (max-width: 991px)').matches) {
      $(".navbar-collapse").collapse('toggle');
    }
  });
});

$('.carousel').carousel({
   interval: 3000
 })


$(document).ready(function(){
  $('#top-menu .navbar-nav a').click( function(){
    var scroll_el = $(this).attr('href');
    $('#top-menu .navbar-nav li').attr("class","nav-item current");
    
      if($(scroll_el).length !=0){
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top -100 }, 500);
      }
      return false;
  });
});