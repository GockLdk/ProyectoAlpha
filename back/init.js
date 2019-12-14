//Navbar mobile
 (function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//JS de materialboxed (fullscreen las imagenes)
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems,{});
   });

//JS para mostrar preloader mientras carga 
  $(window).on("load",function () {
    $(".loader-wrapper").fadeOut("slow");
  });
