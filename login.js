// Manejo del formulario de inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simulación de autenticación
    if (email === "usuario@example.com" && password === "password123") {
        window.location.href = "recarga.html"; // Redirigir a la página de bienvenida
    } else {
        alert('Correo electrónico o contraseña incorrecta');
    }
});

// Manejo del formulario de registro
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    var fullname = document.getElementById('fullname').value;
    var id = document.getElementById('id').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simulación de registro
    // En un caso real, aquí se enviarían los datos a un servidor.
    alert('Registro completado con éxito');
    window.location.href = "recarga.html"; // Redirigir a la página de bienvenida
});
