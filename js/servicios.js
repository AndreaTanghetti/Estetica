// SERVICIOS
const servicio = [
    {
        url: "../img/cejas-hilo.jpg",
        nombre: "Depilacion de cejas con hilo",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 800,
        categoria: "depilacion",
        tiempo: 40,
        id: 1,
        cantidad: 1
    },

    {
        url: "../img/depi-definitiva.jpg",
        nombre: "Depilacion definitiva cuerpo completo",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 3500,
        categoria: "depilacion",
        tiempo: 20,
        id: 2,
        cantidad: 1
    },

    {
        url: "../img/esculpidas.jpg",
        nombre: "Uñas esculpidas",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 2000,
        categoria: "uñas",
        tiempo: 60,
        id: 3,
        cantidad: 1
    },

    {
        url: "../img/microblading.jpg",
        nombre: "Microblanding",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 1200,
        categoria: "cejas",
        tiempo: 40,
        id: 4,
        cantidad: 1
    },

    {
        url: "../img/perfilado.jpg",
        nombre: "Perfilado de cejas",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 700,
        categoria: "cejas",
        tiempo: 20,
        id: 5,
        cantidad: 1
    },

    {
        url: "../img/rostro-cera.jpg",
        nombre: "Depilacion de rostro con cera",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 400,
        categoria: "depilacion",
        tiempo: 30,
        id: 6,
        cantidad: 1
    },

    {
        url: "../img/semi.jpg",
        nombre: "Esmaltado semipernante",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 1000,
        categoria: "uñas",
        tiempo: 50,
        id: 7,
        cantidad: 1
    },

    {
        url: "../img/soft.jpg",
        nombre: "Uñas soft gel",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 1300,
        categoria: "uñas",
        tiempo: 60,
        id: 8,
        cantidad: 1
    },

    {
        url: "../img/styling.jpg",
        nombre: "Ondulacion de pestañas",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 600,
        categoria: "pestañas",
        tiempo: 50,
        id: 9,
        cantidad: 1
    },

    {
        url: "../img/tinte-pestañas.jpg",
        nombre: "Tinte de pestañas",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 600,
        categoria: "pestañas",
        tiempo: 50,
        id: 10,
        cantidad: 1
    },
];


// DOM

const mainServicios = document.getElementById("mainServicios");
const sectionServicios = document.createElement("section");
sectionServicios.className = "sectionServicios";
sectionServicios.innerHTML = `
                            <h1 class="serviciosTitulo">Servicios</h1>
                            <input class="buscador" id="buscador" type="text" placeholder="¿Que estas buscando?">
                            <div class="divContenedor" id="divContenedor"></div>
                            <div class=" p-2">
                            `
mainServicios.appendChild(sectionServicios);

// TARJETAS

const divContenedor = document.getElementById("divContenedor");

const mostrarServicios = () => {

    servicio.forEach(servicio => {

        const divServicios = document.createElement("div");
        divServicios.className = "divServicios";
        divServicios.innerHTML = `
                                <img class="imagen" src=" ${servicio.url}" alt="${servicio.nombre}"> 
                                <div>
                                <p class="nombre">${servicio.nombre} </p>
                                <p class="descripcion">${servicio.descripcion}</p>
    
                                <div class="div1">
                                <p class="precio">$ ${servicio.precio}</p>
                                <p class="tiempo"><img src="../img/reloj.png" alt="reloj"> ${servicio.tiempo} min </p>
                                </div>
    
                                <button class="botonReserva" id="boton${servicio.id}"> RESERVAR </button>
                                </div>
        `;
        divContenedor.appendChild(divServicios);

        const botonReserva = document.getElementById(`boton${servicio.id}`);
        botonReserva.onclick = () => {
            reservarTurno(servicio.id);
        }

    })

};

mostrarServicios();



// BUSQUEDA

const buscador = document.getElementById("buscador");
buscador.oninput = buscarServicios;


function buscarServicios() {
    const valorBusqueda = buscador.value.toLowerCase();
    const serviciosFiltrados = servicio.filter(servicio => servicio.categoria.toLowerCase().includes(valorBusqueda));

    mostrarServiciosFiltrados(serviciosFiltrados);
};


function mostrarServiciosFiltrados(servicios) {
    divContenedor.innerHTML = "";

    servicios.forEach(servicio => {
        const divServicios = document.createElement("div");
        divServicios.className = "divServicios";
        divServicios.innerHTML = `
                                <img class="imagen" src=" ${servicio.url}" alt="${servicio.nombre}"> 
                                <div>
                                <p class="nombre">${servicio.nombre} </p>
                                <p class="descripcion">${servicio.descripcion}</p>
                            
                                <div class="div1">
                                <p class="precio">$ ${servicio.precio}</p>
                                <p class="tiempo"><img src="../img/reloj.png" alt="reloj"> ${servicio.tiempo} min </p>
                                </div>
                            
                                <button class="botonReserva" id="boton${servicio.id}"> RESERVAR </button>
                                </div>
                            `;
        divContenedor.appendChild(divServicios);


        const botonReservaBusqueda = document.getElementById(`boton${servicio.id}`);
        botonReservaBusqueda.onclick = () => {
            reservarTurno(servicio.id);
        }

    })
};


//mando al "carrito"
const reservarTurno = (id) => {
    let reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const turnoYaSolicitado = reservas.find(servicio => servicio.id === id);


    if (turnoYaSolicitado) {
        turnoYaSolicitado.cantidad++;
    } else {
        const solicitarTurno = servicio.find(servicio => servicio.id === id);
        reservas.push(solicitarTurno);
    };

    Toastify({
        text: "Servicio agregado",
        duration: 3000,
        gravity: "top",
        position: "right",
        destination: "./reservas.html",
        style: {
            background: "linear-gradient(to right, #ffdde1, #febbbc)",
            color: "black"
        }
    }).showToast();

    const reservasJson = JSON.stringify(reservas);
    localStorage.setItem("reservas", reservasJson);
};

//CONTADOR DE SERVICIOS AGREGADOS EN "CARRITO" 
const contador = document.getElementById("contador");

function actualizarContador() {
    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    const totalProductos = reservas.map(reserva => reserva.cantidad).reduce((acumulador, cantidad) => acumulador + cantidad, 0);
    contador.innerHTML = ""
    contador.innerHTML = totalProductos;
}

setInterval(actualizarContador, 2000);
actualizarContador();


