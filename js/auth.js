// Viene desde el Html Login al Server

function login() {
    //capturo el user / password
    const username = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    const loginRequest = {
        username: username,
        password: password
    };
    
    //fetch al server con los datos por POST
    fetch(`http://localhost:8080/webapp/api/auth`,{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(loginRequest)
    })

    .then(response => {
        if (!response.ok) {
            // Handle error response
            return response.text().then(text => {
                throw new Error(text || 'Username / Password Invalid');
            });
        }
        //return response.json();
    })

    .then(data => {
        //GUARDA EN LOCAL LA RESPUESTA
        localStorage.setItem('USUARIO', username);
    
        //REDIRECT A LA PAGINA
        window.location.href = './crud.html';
    })

    .catch(error => {
        console.error('Error:', error);
        // Display error message
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
    });
}

// Salgo al Front
function logout() {
    localStorage.removeItem('USUARIO');
    window.location.href = '/index.html';
}

// Busqueda de Usuario logueado
function isLogged() {
    //1 busco en localStorage
    const usuarioEnLocalStorage = localStorage.getItem('USUARIO');
    //verifico si existe el usuario
    if(!usuarioEnLocalStorage) {
        window.location.href = '/login.html';//window es objeto del navegador
    }
}
