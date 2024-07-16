// Validación del Login

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    event.stopPropagation();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailFeedback = document.getElementById('emailFeedback');
    const passwordFeedback = document.getElementById('passwordFeedback');

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
         // Mostrar mensaje de envio de formulario
         alert('Formulario enviado con éxito');
         console.log('Formulario válido y enviado');
     }

}, false);
