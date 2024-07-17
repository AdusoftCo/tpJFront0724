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
        if(response.status !== 201) {
            throw new Error('username / password invalid')
        }
    })
    .then(data => {
        //GUARDA EN LOCAL LA RESPUESTA
        localStorage.setItem('USUARIO', username);
    
        //REDIRECT A LA PAGINA
        window.location.href = './crud.html'
    });    
}

// Salgo al Front
function logout() {
    localStorage.removeItem('USUARIO');
    window.location.href = 'file:///C:/java24100/tp1Java2024/login.html';
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
