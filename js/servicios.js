/*HEADER */
const header = document.getElementById("header");
const divNav = document.createElement("div");
divNav.className = "divNav";
divNav.innerHTML = `
                <div class="logo">
                <a href="../index.html">
                    <img src="../img/logo.png" alt="logo">
                </a>
                </div>
                <nav class="navbar">
                <div class="menuIcono">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="menu">
                    <li><a href="./servicios.html">SERVICIOS</a></li>
                    <li><a href="./turnos.html">TURNOS</a></li>
                    <li><a href="./contactos.html">CONTACTOS</a></li>
                </ul>
                </nav>
                <div class="cuenta">
                <a href="./cuenta">
                    <img src="../img/usuario.png" alt="emoji usuario">Mi Cuenta 
                </a>`;

header.appendChild(divNav)

/* MAIN */
const servicio = [
    {
        url: "../img/cejas-hilo.jpg",
        nombre: "depilacion de cejas con hilo",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 800,
        categoria: "depilacion",
        tiempo: 40
    },

    {
        url: "../img/depi-definitiva.jpg",
        nombre: "Depilacion definitiva cuerpo completo",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 3500,
        categoria: "depilacion",
        tiempo: 20
    },

    {
        url: "../img/esculpidas.jpg",
        nombre: "Uñas esculpidas",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 2000,
        categoria: "uñas",
        tiempo: 60
    },

    {
        url: "../img/microblading.jpg",
        nombre: "Microblanding",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 1200,
        categoria: "cejas",
        tiempo: 40
    },

    {
        url: "../img/perfilado.jpg",
        nombre: "Perfilado de cejas",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 700,
        categoria: "cejas",
        tiempo: 20
    },

    {
        url: "../img/rostro-cera.jpg",
        nombre: "Depilacion de rostro con cera",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 400,
        categoria: "depilacion",
        tiempo: 30
    },

    {
        url: "../img/semi.jpg",
        nombre: "Esmaltado semipernante",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 1000,
        categoria: "uñas",
        tiempo: 50
    },

    {
        url: "../img/soft.jpg",
        nombre: "Uñas soft gel",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 1300,
        categoria: "uñas",
        tiempo: 60
    },

    {
        url: "../img/styling.jpg",
        nombre: "Ondulacion de pestañas",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 600,
        categoria: "pestañas",
        tiempo: 50
    },

    {
        url: "../img/tinte-pestañas.jpg",
        nombre: "Tinte de pestañas",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse aut asperiores totam illo magni praesentium ipsum non molestias recusandae labore.",
        precio: 600,
        categoria: "pestañas",
        tiempo: 50
    },
];

const mainServicios = document.getElementById("mainServicios");
const sectionServicios = document.createElement("section");
sectionServicios.className = "sectionServicios";
sectionServicios.innerHTML = `
                            <h1 class="serviciosTitulo">Servicios</h1>
                            <input class="buscador" type="text" placeholder="¿Que estas buscando?">
                            <div class="divContenedor"></div>
                            `
mainServicios.appendChild(sectionServicios)

const divContenedor = document.querySelector(".divContenedor")

servicio.forEach(servicio => {

    const divServicios = document.createElement("div");
    divServicios.className = "divServicios"
    divServicios.innerHTML = `
    <img class="imagen" src=" ${servicio.url}" alt="${servicio.nombre}"> 
    <div>
    <p class="nombre">${servicio.nombre} </p>
    <p class="descripcion">${servicio.descripcion}</p>

    <div class="div1">
    <p class="precio">$ ${servicio.precio}</p>
    <p class="tiempo"><img src="../img/reloj.png" alt="reloj"> ${servicio.tiempo} min </p>
    </div>

    <button class="botonReserva"> reservar </button>
    </div>
    `;
    divContenedor.appendChild(divServicios);
})



