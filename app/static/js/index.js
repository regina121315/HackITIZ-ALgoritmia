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

function animateStepsOnScroll() {
    const steps = document.querySelectorAll('.timeline .step');
    const cronogramaSection = document.getElementById('cronograma');

    // Comprueba si la sección del cronograma está visible en la ventana
    const cronogramaRect = cronogramaSection.getBoundingClientRect();
    const isVisible = (cronogramaRect.top < window.innerHeight && cronogramaRect.bottom >= 0);

    if (isVisible) {
        // Itera sobre cada paso y aplica la animación con un retraso
        steps.forEach((step, index) => {
            setTimeout(() => {
                step.classList.add('visible');
            }, 800 * index); // 300ms de retraso por cada elemento
        });
        // Desconectar el observador después de la animación para que no se repita
        window.removeEventListener('scroll', animateStepsOnScroll);
    }
}

// Escucha el evento de scroll para iniciar la animación
window.addEventListener('scroll', animateStepsOnScroll);

// Llama a la función una vez en la carga de la página en caso de que la sección ya esté visible
animateStepsOnScroll();

// 1. SMOOTH SCROLLING PARA ENLACES DE NAVEGACIÓN
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 2. ANIMACIÓN DE ELEMENTOS AL HACER SCROLL (MÉTODO MODERNO)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Aplica la clase 'visible' si el elemento está en la pantalla
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1 // La animación se dispara cuando el 10% del elemento es visible
});

// Selecciona todos los elementos que quieres animar
const elementsToAnimate = document.querySelectorAll('.hidden');
elementsToAnimate.forEach(el => observer.observe(el));


// --- CÓDIGO EXISTENTE DE BOTÓN CTA (MODIFICADO PARA SMOOTH SCROLL) ---

// El botón CTA "¡Inscríbete Ahora!" ahora se maneja por el smooth scroll de arriba
// Si quieres mantener el alert, puedes hacerlo así:
//document.querySelector(".cta-button").addEventListener("click", function(e) {
   // e.preventDefault(); // Previene el salto brusco del ancla
   // alert("¡Vamos al formulario de inscripción!");
    // Desplazamiento suave
    //document.querySelector(this.getAttribute('href')).scrollIntoView({
        //behavior: 'smooth'
   // });
//});