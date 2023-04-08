const mainCuenta = document.getElementById("mainCuenta");
const contenedorTodo = document.createElement("div");
// verifico si hay una sesion iniciada
if (localStorage.getItem("sesion activa")) {
  contenedorTodo.innerHTML = `
                      <div class="sesionOk">
                      <h1>Bienvenido</h1>
                      <div class="botones">
                      <button id="irAServicios">Ir a servicios</button>
                      <button id="cerrar">Cerrar Sesion</button>
                      </div>
                      </div>

                `
  mainCuenta.appendChild(contenedorTodo);

const irAServicios = document.getElementById ("irAServicios")
irAServicios.onclick = () => {
        window.location.href = "./servicios.html";
      }

  const cerrarSesion = document.getElementById("cerrar")
  cerrarSesion.onclick = () => {
    localStorage.removeItem("sesion activa")
    mostrarForm();
  }
} else {
  mostrarForm();
}

// si no la hay, muestro esto
function mostrarForm() {
  contenedorTodo.className = "contenedorTodo";
  contenedorTodo.innerHTML = `
                              <div class="divFormularios">  
                              <form id="formIniciarSesion" class="formIniciarSesion">
                              <h2>Iniciar Sesión</h2>
                              <label for="inputUsuario">Usuario</label>
                              <input id="inputUsuario" type="text" >
                              <label for="inputContrasena">Contraseña</label>
                              <input id="inputContrasena" type="password" >
                              <button id="botonIniciarSesion">Ingresar</button>
                              <p>¿Todavia no tenes cuenta?</p>
                              <button id="registro" class="btnRegistro">Registrate</button>
                              </form>
                              </div>
                              `;
  mainCuenta.appendChild(contenedorTodo);

  const botonIniciarSesion = document.getElementById("botonIniciarSesion");
  botonIniciarSesion.onclick = () => {
    botonIniciar();
  }
  const formIniciarSesion = document.getElementById("formIniciarSesion");

  const registro = document.getElementById("registro");
  registro.onclick = () => {
    crearCuenta();
  };

  formIniciarSesion.onsubmit = (e) => {
    e.preventDefault();
    formIniciarSesion.reset();
  };

}

// constructores de cuenta y de sesion 
class Cuenta {
  constructor(nombre, correo, usuario, contrasena) {
    this.nombre = nombre;
    this.correo = correo;
    this.usuario = usuario;
    this.contrasena = contrasena;
  }
};

class SesionOk {
  constructor(inputUsuario, inputContrasena) {
    this.inputUsuario = inputUsuario;
    this.inputContrasena = inputContrasena;
  };
};


// inicio de sesion

// verifico cuentas
let intentosRestantes = 3;
let cuentasExistente = [];

function botonIniciar() {

// tomo datos del form
  const inputUsuario = document.getElementById("inputUsuario");
  const inputContrasena = document.getElementById("inputContrasena");
  const sesionValida = new SesionOk(inputUsuario.value, inputContrasena.value)

  // valido con localStorage
  let cuentaRecuperada = JSON.parse(localStorage.getItem("cuentas"));

  if (!cuentaRecuperada) {
    cuentaRecuperada = [];
  }
  const cuentaValida = cuentaRecuperada.find((cuenta) => cuenta.usuario === inputUsuario.value && cuenta.contrasena === inputContrasena.value
  );

  // si es valida guardo en localStorage
  function sesion() {
    if (cuentaValida) {
      const sesionJson = JSON.stringify(sesionValida);
      localStorage.setItem("sesion activa", sesionJson);
    }
  }

  if (cuentaValida) {
    formIniciarSesion.reset();
    sesion();
    ingresoCorrecto();
  } else {
    intentosRestantes--;
    if (intentosRestantes > 0) {
      swal.fire({
        icon: "warning",
        text: `Usuario o contraseña inválidos. Quedan ${intentosRestantes} intentos.`,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#febbbc",
      });
      formIniciarSesion.reset();
    } else {
      swal.fire({
        icon: "error",
        text: "Se ha superado el límite de intentos. Intente más tarde.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#febbbc",
      });
      formIniciarSesion.reset();
    }
  }
};



const ingresoCorrecto = () => {
  swal
    .fire({
      icon: "success",
      text: "Sesión iniciada con éxito.",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#febbbc",
    })
    .then((result) => {
      if (result.isConfirmed) {
        location.reload();      }
    });
};



function crearCuenta() {
  Swal.fire({
    title: "Crear Cuenta",
    html: `
        <form id="formCrearCuenta" class="formCrearCuenta">
          <label for="inputNombre">Nombre completo</label>
          <input id="inputNombre" type="text" >
          <label for="inputCorreoRegistro">Correo</label>
          <input id="inputCorreoRegistro" type="email" >
          <label for="inputUsuarioRegistro">Usuario</label>
          <input id="inputUsuarioRegistro" type="text" >
          <label for="inputContrasenaRegistro">Contraseña</label>
          <input id="inputContrasenaRegistro"  type="password">
        </form>`,
    showCancelButton: true,
    cancelButtonText: "Cerrar",
    confirmButtonText: "Crear",
    confirmButtonColor: "#febbbc",
  }).then((result) => {
    if (result.isConfirmed) {
      const inputNombre = document.getElementById("inputNombre");
      const inputCorreoRegistro = document.getElementById("inputCorreoRegistro");
      const inputUsuarioRegistro = document.getElementById("inputUsuarioRegistro");
      const inputContrasenaRegistro = document.getElementById("inputContrasenaRegistro");

      verificarCampos(inputNombre, inputCorreoRegistro, inputUsuarioRegistro, inputContrasenaRegistro);
    }
  });
}


const verificarCampos = (inputNombre, inputCorreoRegistro, inputUsuarioRegistro, inputContrasenaRegistro) => {
  if (inputNombre.value === "" || inputCorreoRegistro.value === "" || inputUsuarioRegistro.value === "" || inputContrasenaRegistro.value === "") {
    swal.fire({
      icon: "warning",
      title: `¡Ups!`,
      text: "Algo salio mal, intenta nuevamente",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#febbbc",
    });
  } else {
    const cuenta = new Cuenta(
      inputNombre.value,
      inputCorreoRegistro.value,
      inputUsuarioRegistro.value,
      inputContrasenaRegistro.value
    );
    cuentasExistente = JSON.parse(localStorage.getItem("cuentas")) || [];
    cuentasExistente.push(cuenta);

    swal.fire({
      icon: "success",
      text: "Su cuenta fue creada con exito, por favor inicie sesion.",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#febbbc",
    });
    const cuentaJson = JSON.stringify(cuentasExistente);
    localStorage.setItem("cuentas", cuentaJson);
  }
};

//CONTADOR DE SERVICIOS AGREGADOS EN "CARRITO" 
const contador = document.getElementById("contador");

function actualizarContador() {
  const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
  const totalProductos = reservas.map(reserva => reserva.cantidad).reduce((acumulador, cantidad) => acumulador + cantidad, 0);
  contador.innerHTML = "";
  contador.innerHTML = totalProductos;
}

setInterval(actualizarContador, 2000);
actualizarContador();
