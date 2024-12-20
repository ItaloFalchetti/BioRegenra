// Agregar este código al inicio del archivo o dentro del evento DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // Limpiar el formulario al cargar la página
    const formulario = document.querySelector('.contacto-form');
    if (formulario) {
        formulario.reset();
    }
    
    // También podemos limpiar campos específicos si es necesario
    const select = document.querySelector('.form-row select');
    if (select) {
        select.selectedIndex = 0; // Selecciona la primera opción
    }
});

/* seccion de diseño del formulario de contacto */
  function guardarInformacion(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Obtener los valores del formulario
    const rut = document.getElementById("rut").value;
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;

    // Validación adicional (opcional)
    if (!rut || !nombre || !apellidos || !correo) {
      mostrarMensaje("Por favor, completa todos los campos.", "error");
      return;
    }

    // Simular envío (puedes reemplazar esto con una petición real a un backend)
    console.log("Información guardada:", { rut, nombre, apellidos, correo });

    // Mostrar un mensaje de éxito
    mostrarMensaje("Información guardada exitosamente.", "success");

    // Limpia el formulario
    document.getElementById("form-contacto").reset();
  };
        
  // Función para mostrar mensajes al usuario
  function mostrarMensaje(mensaje, tipo) {
    var mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.style.color = tipo === "success" ? "green" : "red";
  };

  /* Inicio seccion de carrusell */
  // Variables globales para el carrusel
  var posicionActual = 0;
  const items = document.querySelectorAll('.carousel-item');

  // Inicializar el carrusel cuando el DOM esté cargado
  document.addEventListener('DOMContentLoaded', () => {
      // Establecer la primera imagen como activa
      items[0].classList.add('active');
      
      // Ocultar las demás imágenes
      for(let i=1; i < items.length; i++) {
          items[i].classList.remove('active');
      }
  });

  // Función para mover el carrusel
  function moverCarrusel() {
      // Remover clase active de la imagen actual
      items[posicionActual].classList.remove('active');
      
      // Calcular siguiente posición
      posicionActual = (posicionActual + 1) % items.length;
      
      // Agregar clase active a la nueva imagen
      items[posicionActual].classList.add('active');
  }

  // Auto-avance cada 5 segundos (5000 ms)
  setInterval(moverCarrusel, 5000);

  /* fin de seccion de diseño del Carrusel */



  /* seccion de diseño de las metricas */
  // Función para animar contadores
function animarContadores() {
    const contadores = document.querySelectorAll('.contador');
    
    contadores.forEach(contador => {
        const objetivo = parseInt(contador.getAttribute('data-objetivo'));
        const duracion = 2000; // 2 segundos de duración
        const incremento = objetivo / (duracion / 16); // 60 FPS
        let actual = 0;
        
        const actualizarContador = () => {
            actual += incremento;
            if (actual < objetivo) {
                contador.innerText = Math.ceil(actual);
                requestAnimationFrame(actualizarContador);
            } else {
                contador.innerText = objetivo;
            }
        };
        
        // Iniciar animación cuando el elemento sea visible
        const observador = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    actualizarContador();
                    observador.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observador.observe(contador);
    });
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    animarContadores();
});
  /* fin de seccion de diseño de las metricas */


  document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar todos los enlaces del menú
    const menuLinks = document.querySelectorAll('nav a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener el destino del scroll desde el href
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Calcular la posición de scroll
            const headerOffset = 80; // Ajusta según la altura de tu header
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            // Realizar el scroll suave
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Si tienes menú móvil, ciérralo después del clic
            const navLinks = document.querySelector('.nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                document.getElementById('mobile-menu').classList.remove('active');
            }
        });
    });
});


// Funcionalidad del menú móvil
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');

  menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
          menuToggle.classList.remove('active');
          navLinks.classList.remove('active');
      });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && 
          !navLinks.contains(e.target) && 
          navLinks.classList.contains('active')) {
          menuToggle.classList.remove('active');
          navLinks.classList.remove('active');
      }
  });
});
  
