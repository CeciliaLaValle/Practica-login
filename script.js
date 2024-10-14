// script.js

// Simulación de "base de datos" de usuarios
let users = [];

// Cambiar entre formularios
document.getElementById('switch-to-register').addEventListener('click', function() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
});

document.getElementById('switch-to-login').addEventListener('click', function() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
});

// Manejar el registro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const message = document.getElementById('register-message');

    // Verificar si el usuario ya existe
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        message.style.color = 'red';
        message.textContent = 'El usuario ya existe';
    } else {
        users.push({ username, password });
        message.style.color = 'green';
        message.textContent = 'Registro exitoso. Redirigiendo al login...';
        
        setTimeout(() => {
            document.getElementById('switch-to-login').click(); // Redirige al login
        }, 2000);
    }
});

// Manejar el login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const message = document.getElementById('login-message');

    // Verificar si el usuario y contraseña son correctos
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        message.style.color = 'green';
        message.textContent = 'Login exitoso. Redirigiendo...';
        setTimeout(() => {
            window.location.href = 'bienvenido.html'; // Redirige a una página de bienvenida
        }, 2000);
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuario o contraseña incorrectos';
    }
});
