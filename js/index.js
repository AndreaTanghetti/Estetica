/* HERO */
const index = document.getElementById("index");
const section = document.createElement("section");
section.className = "hero";
section.innerHTML =
    `
                    <div class="heroTexto">
                        <p>
                            Stylig de <br>
                            <span>Pestañas</span> <br>
                            transforma tu mirada.
                        </p>
                        <button class="heroBoton" id="heroBoton">
                            RESERVAR
                        </button>
                    </div>
                    `;

index.appendChild(section);


const heroBoton = document.getElementById("heroBoton");

heroBoton.onclick=() =>{
    window.location.href ="./pages/servicios.html"
};

// equipo
const sectionEquipo = document.createElement ("section");
sectionEquipo.className = "sectionEquipo";
sectionEquipo. innerHTML = `
                            <h1>Conoce al equipo de Amapola</h1>
                            <div class="contEquipo" id="contEquipo"></div>
                            `;
index.appendChild(sectionEquipo)


const contEquipo = document.getElementById("contEquipo")
const ruta = "./json/equipo.json"

fetch(ruta)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach(equipo => {
            const divEquipo = document.createElement("div");
            divEquipo.className = "divEquipo";
            divEquipo.innerHTML = `
                                        <img class="imagen" src="${equipo.url}" alt="${equipo.nombre}">
                                        <div>
                                        <h2 class="nombre">${equipo.nombre}</h2>
                                        <p class="descripcion">${equipo.descripcion}</p>
                                        </div>
                `;
            contEquipo.appendChild(divEquipo);

        });
    })
    .catch(error =>
        Toastify({
            text: "Error al cargar la pagina",
            duration: 3000,
            gravity: "top",
            position: "right",
            style: {
                background: "red",
                color: "black"
            }
        }).showToast());

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



