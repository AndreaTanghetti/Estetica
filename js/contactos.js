const contenedorContactos = document.getElementById("contenedor");

const divContenedor = document.createElement("div");
divContenedor.className = "divContenedor";
divContenedor.innerHTML = `
                        <div class="divTexto">
                        <h1 class="h1">Contactanos</h1>
                        <h2 class="h2">Déjanos tu consulta y en la brevedad nos comunicaremos con vos.</h2>
                        </div>
                        <div class="divGrid">
                        <div class="divForm">
                        <form id="form">
                            <label >Ingrese su nombre</label>
                            <input id= "nombre" type="text">

                            <label for=""> Numero de contacto</label>
                            <input id="tlf" type="number">

                            <label for="">Consulta</label>
                            <input id="comentario" class="inputComentario"type="text">
                            <button class="botonForm">Enviar</button>
                            </form>
                        </div>
                        <div class="info">

                        <div>
                        <img src="../img/icons8-marcador-50.png" alt="icono pin ubicacion">
                        <p><span>Direccion</span> <br> Av. 24 de Septiembre 400 <br> San Miguel de Tucumán, Tucumán</p>
                    </div>
                    <div>
                        <img src="../img/icons8-reloj-cuadrado-50.png" alt="icono reloj">
                        <p><span>Horarios</span> <br> Lunes a Sabado <br> Desde 14:00 a 20:00 <br> Domingo cerrado </p>
                    </div>
                        </div>
                        </div>
                        `;
contenedorContactos.appendChild(divContenedor);

class Consulta {
    constructor(nombre, tlf, comentario){
this.nombre=nombre;
this.tlf=tlf;
this.comentario=comentario;
    };
};


const form = document.getElementById("form");


form.onsubmit = (e) =>{
    e.preventDefault();
    const nombre = document.getElementById ("nombre");
    const tlf = document.getElementById ("tlf");
    const comentario = document.getElementById ("comentario");

if (nombre.value === "" || tlf.value === "" || comentario.value === "" ){
    Toastify({
        text: "Por favor complete todos los campos",
        duration: 3000,
        gravity:"top",
        position: "right",
        destination: "./reservas.html",
        style :{
            background: "red" ,
            color : "black"
        }
        }).showToast();
} else{
    Toastify({
        text: "Consulta enviada",
        duration: 3000,
        gravity:"top",
        position: "right",
        destination: "./reservas.html",
        style :{
            background: "linear-gradient(to right, #ffdde1, #febbbc)" ,
            color : "black"
        }
        }).showToast();
    const consulta = new Consulta (nombre.value, tlf.value, comentario.value);
    form.reset();

    const consultaJson = JSON.stringify(consulta);

    localStorage.setItem("consulta", consultaJson);
}

};

