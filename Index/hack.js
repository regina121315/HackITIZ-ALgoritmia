// Establece la fecha final de la cuenta regresiva (1 de enero de 2026)
const countDownDate = new Date("November 6, 2025 00:00:00").getTime();

// Actualiza la cuenta regresiva cada segundo
const timerInterval = setInterval(function() {
    // Obtiene la fecha y hora actuales
    const now = new Date().getTime();

    // Calcula la distancia entre la fecha final y la actual
    const distance = countDownDate - now;

    // Calcula los días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Muestra el resultado en los elementos correspondientes
    document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
    document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

    // Si la cuenta regresiva termina, muestra un mensaje
    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        
        // Mostrar mensaje de que el evento ha comenzado
        alert("¡El Hackaton ITIZ 2024 ha comenzado!");
    }
}, 1000); // 1000 milisegundos = 1 segundo

// Añadir funcionalidad al botón
document.querySelector(".cta-button").addEventListener("click", function() {
    alert("¡Redirigiendo al formulario de inscripción!");
    // Aquí normalmente redirigirías a una página de inscripción
    // window.location.href = "formulario-inscripcion.html";
});