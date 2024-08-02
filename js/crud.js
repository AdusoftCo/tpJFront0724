// Listado de todo lo que vino del server

let datos = [];

//Edicion de Registro seleccionado
function editar(id) {
    const objetoAEditar =  datos.find(x => x.id === id);
    alert(JSON.stringify(objetoAEditar));
    
    //actualizo el html con los datos del row
    document.getElementById('nombre').value = objetoAEditar.nombre;
    document.getElementById('apellido').value = objetoAEditar.apellido;
    document.getElementById('email').value = objetoAEditar.email;
    document.getElementById('tipoCliente').value = objetoAEditar.tipoClienteId || '';

    //agregamos el id al campo hidden
    document.getElementById('id').value = objetoAEditar.id;
}

// Limpio fields
function limpiar() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tipoCliente').value = '';
    document.getElementById('id').value = '';
}

//Guardar en Tabla
async function guardar() {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const tipoClienteId = document.getElementById('tipoCliente').value;
    
    console.log(nombre,apellido,email,tipoClienteId,id);

    //const formData = new FormData();

    const jsonRequest = {
        id,
        nombre,
        apellido,
        email,
        tipoClienteId
    };

    const json = JSON.stringify(jsonRequest);
    console.log(json);
    const endpoint = id ? 'actualizarClientesController' : 'crearClientesController';

    //fetch POST al server para crear el recurso(cliente)
    await fetch(`http://localhost:8080/webapp/${endpoint}`,{
        method: 'POST',
        body: json,
        headers: new Headers({
            'Content-Type': 'application/json'
        })
        }
    );
    limpiar();

    listar();
}

//Listar la Tabla actualizada
function listar() {
    const json = 
        fetch('http://localhost:8080/webapp/listarClientesController')
        .then(response => response.json())
        .then(data => {
            datos = data;
            dibujarDatos(data)
        });
}

//Dibujar Tabla
function dibujarDatos(json) {
    console.log(json)
    const filas = json.map(x => Fila(x));
    /*[x,       x]
     Fila(x) Fila(x)  
    ['tr','tr']*/

    //.join(' ')
    document.getElementById('datos').innerHTML = filas.join(' ');
}

//Eliminar Registro
async function eliminar(id) {
    const eliminar = confirm('¿Eliminar?');//true|false
    if(eliminar) {
        //fetch sin anda envia por GET
        await fetch(`http://localhost:8080/webapp/eliminarClientesController?id=${id}`,{
            method: 'delete'
        });
        listar();//vuelve a buscar todo en el back

        //pero podria solo eliminar la fila TPH:
    }
}

//Inserto Datos en tabla
function Fila(obj) {
    return `
        <tr id='${obj.id}'>
            <td>
                ${obj.id}
            </td>
            <td>
                ${obj.email}
            </td>
            <td>
                ${obj.nombre}
            </td>
            <td>
                ${obj.apellido}
            </td>
            <th>
                ${obj.imagen}
            </th>
            <td>
                ${obj.tipoClienteId}
            </td>
            <td>
                <button href="#" class="btn btn-outline-dark btn-custom" onclick="eliminar(${obj.id})">Borrar</button>
                <button href="#" class="btn btn-outline-dark btn-custom" onclick="editar(${obj.id})">Editar</button>
            </td>
        </tr>
    `
}

//ni bien carga la pagina, cargo la lista de los datos
listar();