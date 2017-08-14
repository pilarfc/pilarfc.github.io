var typed = new Typed('#typed-strings', {
     strings: ["Pilar.", "Desarrolladora Front-End Jr.", "Lic. en Negocios Internacionales."],
    typeSpeed: 90,
     backSpeed: 50,
    loop: true
  });

// Texto contáctame
parcala(".demo","span");

function parcala(e,tag){
  $(e).each(function (index) {
    var char = $(this).text().split("");
    $this = $(this);
    $this.empty();
    $.each(char, function (i, el) {
      $this.append("<"+tag+">"+el+"</"+tag+">");
    });
  });
}