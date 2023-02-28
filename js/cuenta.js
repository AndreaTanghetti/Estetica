const mainCuenta = document.getElementById("mainCuenta");
const contenedorTodo = document.createElement("div");
contenedorTodo.className = "contenedorTodo";
contenedorTodo.innerHTML = `
                            <div class="divFormularios">  
                            <form id="formCrearCuenta" class="formCrearCuenta">
                            <h2>Regístrarse</h2>
                            <label for="inputNombre">Nombre completo</label>
                            <input id="inputNombre" type="text" >
                            <label for="inputCorreoRegistro">Correo</label>
                            <input id="inputCorreoRegistro" type="email" >
                            <label for="inputUsuarioRegistro">Usuario</label>
                            <input id="inputUsuarioRegistro" type="text" >
                            <label for="inputContrasenaRegistro">Contraseña</label>
                            <input id="inputContrasenaRegistro" type="password">
                            <button id="botonRegistrarse">Regístrarse</button>
                            </form>

                            <form id="formIniciarSesion" class="formIniciarSesion">
                            <h2>Iniciar Sesión</h2>
                            <label for="inputUsuario">Usuario</label>
                            <input id="inputUsuario" type="text" >
                            <label for="inputContrasena">Contraseña</label>
                            <input id="inputContrasena" type="password" >
                            <button id="botonIniciarSesion">Ingresar</button>
                            </form>
                            </div>
                            `;
mainCuenta.appendChild(contenedorTodo);

// crear cuenta

const formCrearCuenta = document.getElementById("formCrearCuenta");


class Cuenta {
    constructor(nombre, correo, usuario, contrasena) {
        this.nombre = nombre;
        this.correo = correo;
        this.usuario = usuario;
        this.contrasena = contrasena;
    };
};

const cuentaCreada = [];

formCrearCuenta.onsubmit = (e) => {
    e.preventDefault();
    const inputNombre = document.getElementById("inputNombre");
    const inputCorreoRegistro = document.getElementById("inputCorreoRegistro");
    const inputUsuarioRegistro = document.getElementById("inputUsuarioRegistro");
    const inputContrasenaRegistro = document.getElementById("inputContrasenaRegistro");
    const cuenta = new Cuenta(inputNombre.value, inputCorreoRegistro.value, inputUsuarioRegistro.value, inputContrasenaRegistro.value);
    formCrearCuenta.reset();


    const cuentaJson = JSON.stringify(cuenta);
    localStorage.setItem("Cuentas", cuentaJson);
    
    const cuentaJsonRecuperar = localStorage.getItem("Cuentas");
    const cuentaRecuperada = JSON.parse(cuentaJsonRecuperar);

    cuentaCreada.push(cuentaRecuperada);
    console.log(cuentaCreada);
};




const botonRegistrarse = document.getElementById("botonRegistrarse");

botonRegistrarse.onclick = () => {
    alert("Su cuenta fue creada con exito, por favor inicie sesion.");
}

// incio de sesion con verificacion 

const formIniciarSesion = document.getElementById("formIniciarSesion");
const botonIniciarSesion = document.getElementById("botonIniciarSesion");
let intentosRestantes = 3;

botonIniciarSesion.onclick = () => {
    const inputUsuario = document.getElementById("inputUsuario");
    const inputContrasena = document.getElementById("inputContrasena");

    const cuentaValida = cuentaCreada.find(cuentaRecuperada => cuentaRecuperada.usuario === inputUsuario.value && cuentaRecuperada.contrasena === inputContrasena.value);

    if (cuentaValida) {
        formIniciarSesion.reset();
        alert("Sesión iniciada con éxito.");
        window.location.href = "./servicios.html"

    } else {
        intentosRestantes--;
        if (intentosRestantes > 0) {
            alert(`Usuario o contraseña inválidos. Quedan ${intentosRestantes} intentos.`);
            formIniciarSesion.reset();

        } else {
            alert('Se ha superado el límite de intentos. Intente más tarde.');
            formIniciarSesion.reset();
        }
    }
};

formIniciarSesion.onsubmit = (e) => {
    e.preventDefault();
};






