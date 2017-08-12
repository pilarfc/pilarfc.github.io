var cargarPagina = function () {
    $(".button-collapse").sideNav(); 
    sideNavbar();
    navFijo();
    mostrarSkills();
    new WOW().init();
}

var sideNavbar = function () {
    var mediaquery = window.matchMedia("(max-width: 767px)");
    var $navFijo = $('#nav-fijo');
    var $sidenav = $('#side_nav-id');
    
    if (mediaquery.matches) {
   // mediaquery es 767
      $sidenav.removeClass('hide'); 
    }
    else {
        $sidenav.addClass('hide'); 
    }
}

var navFijo = function () {
    var mediaquery = window.matchMedia("(min-width: 1025px)");
    var $navFijo = $('#nav-fijo');
    var $sidenav = $('#side_nav-id');
    
    if (mediaquery.matches) {
   // mediaquery es 1025
        $navFijo.removeClass('hide')
    }
    else {
        $navFijo.addClass('hide'); 
    }
    
}

var mostrarSkills = function () {
    var $botonMostrarMas = $('#boton-mostrar-mas'); 
    var $seccionOtrosSkills = $('#otros-skills'); 
    
    $botonMostrarMas.click(function() {
        $seccionOtrosSkills.toggle('slow');
    });
}


$(document).ready(cargarPagina); 

