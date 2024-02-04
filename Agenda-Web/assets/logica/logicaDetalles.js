document.addEventListener('DOMContentLoaded', function () {
    const contactos = [
        { id: '1', nombre: 'Juan', apellido: 'Perez', telefono: '12345678', correo: 'juan@example.com', edad: 30 },
        { id: '2', nombre: 'Maria', apellido: 'Gomez', telefono: '87654321', correo: 'maria@example.com', edad: 25 },
        { id: '3', nombre: 'Carlos', apellido: 'Lopez', telefono: '23456789', correo: 'carlos@example.com', edad: 28 },
        { id: '4', nombre: 'Ana', apellido: 'Martinez', telefono: '98765432', correo: 'ana@example.com', edad: 22 },
        { id: '5', nombre: 'Pedro', apellido: 'Rodriguez', telefono: '34567890', correo: 'pedro@example.com', edad: 35 },
        { id: '6', nombre: 'Laura', apellido: 'Garcia', telefono: '87654321', correo: 'laura@example.com', edad: 27 },
        { id: '7', nombre: 'Javier', apellido: 'Fernandez', telefono: '12345678', correo: 'javier@example.com', edad: 32 },
        { id: '8', nombre: 'Sofia', apellido: 'Hernandez', telefono: '23456789', correo: 'sofia@example.com', edad: 29 },
        { id: '9', nombre: 'Sofia', apellido: 'Hernandez', telefono: '23456789', correo: 'sofia@example.com', edad: 29 }
    ];

    const contactosContainer = document.getElementById('contactosContainer');

    contactos.forEach(contacto => {
        const card = `
      <div class="col-mt-4 mb-4">
      <div class="card">
        <img src="../resource/usuario.png" alt="" width="150">
        <div class="card-body">
          <h5 class="card-title">${contacto.nombre} ${contacto.apellido}</h5>
          <p class="card-text">Teléfono: ${contacto.telefono}</p>
          <p class="card-text">Correo: ${contacto.correo}</p>
          <p class="card-text">Edad: ${contacto.edad} años</p>
        </div>
      </div>
    </div>
      `;
        contactosContainer.innerHTML += card;
    });
});