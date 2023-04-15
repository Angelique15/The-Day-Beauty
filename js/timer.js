// Establece la fecha del evento (en este caso, 1 de mayo de 2023 a las 10:00 am)
let countDownDate = new Date("May 1, 2023 10:00:00").getTime();

// Actualiza el temporizador cada segundo
let x = setInterval(function () {

    // Obtiene la fecha y hora actual
    let now = new Date().getTime();

    // Calcula la diferencia entre la fecha del evento y la fecha actual
    let distance = countDownDate - now;

    // Calcula los días, horas, minutos y segundos restantes
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualiza el contenido de la caja de texto con el tiempo restante
    document.getElementById("countdown").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Si el contador llega a cero, muestra un mensaje
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "¡El evento ha comenzado!";
    }
}, 1000);