/* ======================================= */
/* === JS PARA LATITUD SUR (Actualizado) === */
/* ======================================= */

document.addEventListener('DOMContentLoaded', () => {
    
    // La sección a la que queremos desplazarnos (el formulario)
    const formSection = document.getElementById('contact-section-combined');
    
    // 1. ANIMACIÓN INICIAL DE APARICIÓN (FADE-IN)
    const bannerOverlay = document.querySelector('.banner-overlay');
    if (bannerOverlay) {
        window.addEventListener('load', () => {
            bannerOverlay.classList.add('is-visible');
        });
    }

    // 2. SCROLL A FORMULARIO DE CONTACTO (Para TODOS los botones de reserva)
    
    // Colección de todos los botones de reserva (ID del banner + Clase de los paquetes)
    const reservationButtons = document.querySelectorAll('#btnReservar, .button-reserve');
    
    if (reservationButtons.length > 0 && formSection) {
        
        reservationButtons.forEach(button => {
            
            // Asignamos el evento de click a cada botón
            button.addEventListener('click', (e) => {
                e.preventDefault(); // Evita que los enlaces sigan su comportamiento predeterminado
                
                // Realiza el scroll suave hacia la sección del formulario
                formSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Asegura que el formulario quede arriba
                });
            });
        });
    }

    // 3. ANIMACIÓN AL SCROLL (AOS - Animate On Scroll)
    
    // Elementos a animar: Misión, Servicios, Testimonios y Paquetes
    const animatedElements = document.querySelectorAll('.mision-content, .service-item, .testimonial-card, .package-card');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15 // El elemento se considera visible al 15% en pantalla
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });


   // ... otros códigos JS ...

// 4. MANEJO DEL FORMULARIO DE CONTACTO (DEBE ESTAR DESACTIVADO)
const formContacto = document.getElementById('formContacto');

if (formContacto) {
    // ELIMINA O COMENTA ESTE BLOQUE
    /* formContacto.addEventListener('submit', (e) => {
        e.preventDefault(); 
        alert('¡Mensaje enviado! (Salesforce se encargará de esto)'); 
        e.target.reset();
    });
    */
}

});
