//Registro nuevo Cliente del FrontEnd -registro-

async function registrar(event) {

    event.preventDefault();

    // Get the form data
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const fechaNac = document.getElementById('fechaNac').value.trim();
    const pais = document.getElementById('pais').value.trim();

    // Validate the form data
    if (nombre === '' || apellido === '' || email === '' || password === '' || fechaNac === '' || pais === '') {
        alert('Por favor, complete todos los campos');
        return;
    }

    // Format the fechaNac field
    const fechaNacFormatted = new Date(fechaNac).toISOString().split('T')[0];

    // Create the cliente object
    const cliente = {
        nombre,
        apellido,
        email,
        password,
        fechaNac: fechaNacFormatted,
        pais,
        tipoClienteId: null // Explicitly set tipoClienteId to null
    };

    try {
        const response = await fetch('http://localhost:8080/webapp/crearClientesController', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error('Failed to register client: ' + errorText);
        }

        const data = await response.json();
        console.log('Response data:', data);

        // Clean fields
        cleanFields();

        // Hide the error message if registration is successful
        const errorMessage = document.getElementById('error-message');
        errorMessage.style.display = 'none';

        // Display the success message
        const successMessage = document.getElementById('success-message');
        successMessage.textContent = 'Usuario Creado !!!';
        successMessage.style.display = 'block';
                
    } catch (error) {
        console.error('Error:', error);
        // Display error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';

        // Hide the success message if there was an error
        const successMessage = document.getElementById('success-message');
        successMessage.style.display = 'none';
    }
}

document.getElementById('registrarBtn').addEventListener('click', registrar); 

function cleanFields() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('fechaNac').value = '';
    document.getElementById('pais').value = '0'; // Reset to default value
  }
  