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

  const nodemailer = require('nodemailer');

  module.exports = async (req, res) => {
    if (req.method === 'POST') {
      const { email, subject, message } = req.body;

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'developertrach@gmail.com',
          pass: 'Skalaria2712',
        },
      });

      try {
        await transporter.sendMail({
          from: 'developertrach@gmail.com',
          to: email,
          subject: subject,
          text: message,
        });

        res.status(200).send('Correo enviado correctamente.');
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al enviar el correo.');
      }
    } else {
      res.status(405).send('Método no permitido');
    }
  };

  let posicionActual = 0;
  const items = document.querySelectorAll('.carousel-item');
          
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