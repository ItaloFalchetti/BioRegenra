<script>
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
  }

  // Función para mostrar mensajes al usuario
  function mostrarMensaje(mensaje, tipo) {
    const mensajeElemento = document.getElementById("mensaje");
    mensajeElemento.textContent = mensaje;
    mensajeElemento.style.color = tipo === "success" ? "green" : "red";
  }
</script>
