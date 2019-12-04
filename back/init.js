//Navbar mobile
 $(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  });

//JS de materialboxed (fullscreen las imagenes)
 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems,{});
   });