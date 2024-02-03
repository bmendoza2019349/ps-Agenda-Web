const usuario = 'admin';
const contraseña = 'admin';

function validacionLogin(){
    const usuarioIngresado = document.getElementById('username').value;
    const contraseñaIngresada = document.getElementById('password').value;

    if(usuario === usuarioIngresado && contraseña === contraseñaIngresada){
        alert('Inicio de sesión exitoso');
        window.location.href = './assets/pages/contactos.html';
    }else{
        alert('Inicio de sesión exitoso');
        window.location.href = './assets/pages/contactos.html';
    }
}
