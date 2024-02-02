const contactos = [
    { id: '1', nombre: 'Juan', apellido: 'Perez', telefono: '12345678', correo: 'juan@example.com', edad: 30 },
    { id: '3', nombre: 'Carlos', apellido: 'Lopez', telefono: '23456789', correo: 'carlos@example.com', edad: 28 },
    { id: '5', nombre: 'Pedro', apellido: 'Rodriguez', telefono: '34567890', correo: 'pedro@example.com', edad: 35 },
    { id: '7', nombre: 'Javier', apellido: 'Fernandez', telefono: '12345678', correo: 'javier@example.com', edad: 32 },
    { id: '9', nombre: 'Sofia', apellido: 'Hernandez', telefono: '23456789', correo: 'sofia@example.com', edad: 29 }
];

const tbody = document.getElementById('ListaFavoritos');

contactos.forEach(function (contacto) {
    const row = tbody.insertRow();
    const cellDetalle = row.insertCell(0);
    const cellNombre = row.insertCell(1);
    const cellApellido = row.insertCell(2);
    const cellTelefono = row.insertCell(3);
    

    var detalleButton = document.createElement('a');
    detalleButton.innerHTML = '<img src="../resource/favorito.png" alt="" width="35">';
    cellDetalle.appendChild(detalleButton);

    cellNombre.innerHTML = contacto.nombre;
    cellApellido.innerHTML = contacto.apellido;
    cellTelefono.innerHTML = contacto.telefono;
    

});