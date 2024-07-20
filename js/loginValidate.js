// Validación del Login

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const emailInput = document.getElementById('usuario');
        const passwordInput = document.getElementById('password');
        const emailFeedback = document.getElementById('usuarioFeedback');
        const passwordFeedback = document.getElementById('passwordFeedback');
        const errorMessage = document.getElementById('error-message');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

        let isValid = true;

        // Validación de Email
        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('is-invalid');
            emailFeedback.textContent = 'Por favor ingrese un Correo Electrónico válido.';
            isValid = false;
        } else {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        }

        // Validación de Password
        if (!passwordRegex.test(passwordInput.value)) {
            passwordInput.classList.add('is-invalid');
            passwordFeedback.textContent = 'La Contraseña debe tener al menos 6(Seis) caracteres, incluyendo letras y números.';
            isValid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
            passwordInput.classList.add('is-valid');
        }

        if (isValid) {
            login();
        }

    }, false);

});


//Registro nuevo Cliente del FrontEnd -registro-
function registrar() {

    //const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fechaNac = document.getElementById('fecha_nac').value;
    const pais = document.getElementById('pais').value;
        
    console.log(nombre,apellido,email);

    const jsonRequest = {
        nombre,
        apellido,
        email,
        password,
        fechaNac,
        pais
    };

    const json = JSON.stringify(jsonRequest);

    fetch('http://localhost:8080/webapp/api/clientes', {  // Replace with your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
    
    .then(response => {
        if (!response.ok) {
            return response.json().then(error => {
                throw new Error(error.message || 'Failed to register client');
            });
        }
        return response.json();
    })
    
    .then(data => {
        // Handle successful response
        console.log('Client registered successfully:', data);
        alert('Cliente registrado Successfully');
        // Optionally, you can redirect or clear the form
        // window.location.href = '/path/to/another/page'; // Redirect to another page if needed
        // Clear form fields
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('fec_nac').value = '';
        document.getElementById('pais').value = '';
    })
    
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
        alert('Failed to register client: ' + error.message);
    }); 
}
