
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

const tbody = document.getElementById('ListaContactos');

contactos.forEach(function (contacto) {
    const row = tbody.insertRow();
    const cellNombre = row.insertCell(0);
    const cellApellido = row.insertCell(1);
    const cellTelefono = row.insertCell(2);
    const cellDetalle = row.insertCell(3);

    cellNombre.innerHTML = contacto.nombre;
    cellApellido.innerHTML = contacto.apellido;
    cellTelefono.innerHTML = contacto.telefono;

});

function agregarContacto() {
    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let telefono = document.getElementById('telefono').value;
    let correo = document.getElementById('correo').value;
    let edad = document.getElementById('edad').value;

    if (nombres && apellidos && telefono && correo && edad) {
        alert('Contacto agregado:\nNombres: ' + nombres + '\nApellidos: ' + apellidos +
            '\nTelefono: ' + telefono + '\nCorreo: ' + correo + '\nEdad: ' + edad);
        limpiarCampos();
    } else {
        alert('Por favor, complete todos los campos antes de agregar.');
    }
}

function limpiarCampos() {
    document.getElementById('nombres').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('edad').value = '';
}

const toggleMenuElement = document.getElementById('toggle-menu');
const mainMenuElement = document.getElementById('main-menu');

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show');
});