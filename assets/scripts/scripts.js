function fechaHoy() {
    var fecha = new Date();
    return fecha.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
function horaActual() {
    var hoy = new Date();
    var hora = hoy.getHours();
    var minutos = hoy.getMinutes();
    var segundos = hoy.getSeconds();
    return {hora, minutos, segundos};
}
var fecha = new Date();
let fechaActual = fecha.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
let horaHoy = fecha.toLocaleTimeString();

document.getElementById("fechaYhora").innerHTML = `Hoy es ${fechaActual} y son las ${horaHoy}`

Fancybox.bind("[data-fancybox]", {
});

$("#mapBtn").click(function() {
    Fancybox.show([{
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.6470462987454!2d-73.2417267!3d-39.8149083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9615ee7777bde51b%3A0xebd5b43e89443fd5!2sAv.%20Ram%C3%B3n%20Picarte%20567%2C%20Valdivia%2C%20Los%20R%C3%ADos!5e0!3m2!1ses!2scl!4v1750296472693!5m2!1ses!2scl",
        type: "iframe",
        opts: {
            caption: "Mapa de Google - Empire State Building",
            iframe: {
                css: { width: "800px", height: "600px"},
                attr: { allowfullscreen: true, loading: "lazy" }
            }
        }
    }]);
});

