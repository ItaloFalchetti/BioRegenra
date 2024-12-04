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
  function moverCarrusel(direccion) {
      posicionActual = (posicionActual + direccion + items.length) % items.length;
      document.querySelector('.carousel-inner').style.transform = 
        `translateX(-${posicionActual * 100}%)`;
  }

  // Auto-avance cada 5 segundos
  setInterval(() => moverCarrusel(1), 5000);

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