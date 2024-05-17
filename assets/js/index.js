// funcion que permite que al bajar o subir la pagina el navbar se rellene de un VideoColorSpace, ya que el navbar es transparente
$(function () {
    $(window).scroll(function () {
      var navegador = $(".navbar");
      if ($(this).scrollTop() > 1000) {
        navegador.css("background", "#328998");
      } else {
        navegador.css("background", "none");
      }
    });
  });

// funcion que permite cambiar de color el texto de las cardds de destacados de blanco a amarillo
  $(".card1")
  .mouseover(function () {
    $(".card1txt").css("color", "#f77f00");
  })
  .mouseleave(function () {
    $(".card1txt").css("color", "white");
  });