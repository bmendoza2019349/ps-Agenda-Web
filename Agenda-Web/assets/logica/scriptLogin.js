const usuariosPredeterminados = [
    { usuario: 'admin', contraseña: 'admin' },
    { usuario: 'braulio', contraseña: 'braulio' }
];

function validacionLogin() {
    const usuarioInput = document.getElementById('username').value;
    const contraseñaInput = document.getElementById('password').value;

    const usuarioValido = usuariosPredeterminados.some(user => 
        user.usuario === usuarioInput && user.contraseña === contraseñaInput
    );

    if (usuarioValido) {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
}
