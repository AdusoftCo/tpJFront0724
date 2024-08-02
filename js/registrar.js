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
    
/*
    
    /*const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const fechaNac = document.getElementById('fechaNac').value;
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
    fetch('http://localhost:8080/webapp/crearClientesController', {  
        method: 'POST',
        body: JSON.stringify(jsonRequest),
        headers: new Headers({
            'Content-Type': 'text/json'
        }),
        
    })
    
    .then(response => {
        console.log('Response status:', response.status);
        console.log('Response headers:', response.headers);
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
        
        // Clear form fields
        document.getElementById('nombre').value = '';
        document.getElementById('apellido').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        document.getElementById('fechaNac').value = '';
        document.getElementById('pais').value = '';
        
        //window.location.href = '/path/to/another/page'; // Redirect to another page if needed
    })
    
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
        alert('Failed to register client: ' + error.message);
    });
    */

    
