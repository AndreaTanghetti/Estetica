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
    }
};

const cuentaCreada = [];

const botonRegistrarse = document.getElementById("botonRegistrarse ")

formCrearCuenta.onsubmit = (e) => {
    e.preventDefault();
    const inputNombre = document.getElementById("inputNombre");
    const inputCorreoRegistro = document.getElementById("inputCorreoRegistro");
    const inputUsuarioRegistro = document.getElementById("inputUsuarioRegistro");
    const inputContrasenaRegistro = document.getElementById("inputContrasenaRegistro");


    if (inputNombre.value === "" || inputCorreoRegistro.value === "" || inputUsuarioRegistro.value === "" || inputContrasenaRegistro.value === "") {
        swal.fire({
            icon: "warning",
            text: "Por favor llene todos los campos",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#febbbc",
        })
    } else {
        const cuenta = new Cuenta(inputNombre.value, inputCorreoRegistro.value, inputUsuarioRegistro.value, inputContrasenaRegistro.value);
        cuentaCreada.push(cuenta)
        swal.fire({
            icon: "success",
            text: "Su cuenta fue creada con exito, por favor inicie sesion.",
            confirmButtonText: "Aceptar",
            confirmButtonColor: "#febbbc",
        })
        const cuentaJson = JSON.stringify(cuentaCreada);
        localStorage.setItem("Cuentas", cuentaJson);
        formCrearCuenta.reset();
    }

};



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
        ingresoCorrecto();
    } else {
        intentosRestantes--;
        if (intentosRestantes > 0) {
            swal.fire({
                icon: "warning",
                text: `Usuario o contraseña inválidos. Quedan ${intentosRestantes} intentos.`,
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#febbbc",
            })
            formIniciarSesion.reset();

        } else {
            swal.fire({
                icon: "error",
                text: 'Se ha superado el límite de intentos. Intente más tarde.',
                confirmButtonText: "Aceptar",
                confirmButtonColor: "#febbbc",
            })
            formIniciarSesion.reset();
        }
    }
};

formIniciarSesion.onsubmit = (e) => {
    e.preventDefault();
};

const ingresoCorrecto = ()=>{
    swal.fire({
        icon: "success",
        text: "Sesión iniciada con éxito.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#febbbc",
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./servicios.html"
        }
    })
};



