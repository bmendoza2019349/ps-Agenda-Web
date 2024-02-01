const usuario = 'admin';
const contraseña = 'admin';

function validacionLogin(){
    const usuarioIngresado = document.getElementById('username').value;
    const contraseñaIngresada = document.getElementById('password').value;

    if(usuario === usuarioIngresado && contraseña === contraseñaIngresada){
        alert('Inicio de sesión exitoso');
    }else{
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
}
