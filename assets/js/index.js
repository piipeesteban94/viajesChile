// funcion que permite que al bajar o subir la pagina el navbar se rellene de un color, ya que el navbar es transparente
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

// funcion que permite cambiar de color el texto de las cards de destacados de blanco a amarillo
  $(".card1")
  .mouseover(function () {
    $(".card1txt").css("color", "#f77f00");
  })
  .mouseleave(function () {
    $(".card1txt").css("color", "white");
  });

//funcion que arroja un alert al presionar el boton de enviar correo.
  $('#enviarCorreo').click(function () {
    alert("El correo fue enviado correctamente")
})


//funcion que muestra informacion sobre el boton de cambiar imagen del carrusel
$(document).ready(function () {
    $("button").tooltip()
})