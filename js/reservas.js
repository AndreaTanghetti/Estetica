const contenedorReserva = document.getElementById("contenedorReserva");

const recuperarReservas = localStorage.getItem("reservas");


let reservarTurnos = [];
if (recuperarReservas) {
    reservarTurnos = JSON.parse(recuperarReservas);
} else {
    reservarTurnos = [];
};
//-----------
const sectionReservas = document.getElementById("sectionReservas");
sectionReservas.className = "sectionReservas";
sectionReservas.innerHTML = `
                            <h1 class="turnosH1"> Mis turnos</h1>
                            <div class="divContReservas" id="divContReservas"> </div>
`;
contenedorReserva.appendChild(sectionReservas);

//---------
const divContReservas = document.getElementById("divContReservas");

// funciones
// si hay algo en carrito muestra esto
const finalizar = () => {
    const finalizar = document.createElement("div");
    finalizar.className = "finalizar";
    finalizar.innerHTML = `
                        <div>
                        <p id="total">El total a abonar es $   </p>
                        <div class="botonesFinalizar">
                        <button id="eliminarTodo">Eliminar todo</button>
                        <button id="finalizar">Finalizar reserva</button>
                        </div>
                        </div>
                        `;
    divContReservas.appendChild(finalizar);
    totalFinal();
    // eliminar todo
    const eliminarTodo = document.getElementById("eliminarTodo");
    eliminarTodo.onclick = () => {
        localStorage.clear("reservas");
        divContReservas.innerHTML = "";
    };
    // finalizar reserva
    const botonfinalizar = document.getElementById("finalizar");
    botonfinalizar.onclick = () => {
        alert("Dejanos un wpp con la fecha y hora en la que te gustaria agendar el turno y te enviaremos el link de pago");
        window.open("https://wa.me/qr/JGAHWZ2KNFIDP1", "_blank");
        localStorage.clear("reservas");
        divContReservas.innerHTML = "";
    };
};

// total a pagar
const totalFinal = () => {
    let totalAPagar = 0;
    reservarTurnos.forEach(reserva => {
        totalAPagar += reserva.precio * reserva.cantidad;
    });

    const pTotal = document.getElementById('total');
    pTotal.innerHTML = `El total a abonar es $${totalAPagar}`;
}

// botones

const botones = (reserva) => {
    // ---------Eliminar
    const botonEliminar = document.getElementById(`botonEliminar${reserva.id}`);
    botonEliminar.onclick = () => {
        eliminarDeReserva(reserva.id);
    }
    //---------Restar
    const botonMenos = document.getElementById(`botonMenos${reserva.id}`);
    botonMenos.onclick = () => {
        restarDeReserva(reserva.id);
    }
    //---------Sumar
    const botonMas = document.getElementById(`botonMas${reserva.id}`);
    botonMas.onclick = () => {
        sumarAReserva(reserva.id);
    }
}


// eliminar el total de la cantidad de un servicio
const eliminarDeReserva = (id) => {
    const servicio = reservarTurnos.find(reserva => reserva.id === id);
    const indice = reservarTurnos.indexOf(servicio);

    if (indice !== -1) {
        reservarTurnos.splice(indice, 1);
        divContReservas.innerHTML = "";

        localStorage.setItem("reservas", JSON.stringify(reservarTurnos));
        mostrarReservas();
    }
};
// ----------

// elimina de uno la cantidad de un servicio 

const restarDeReserva = (id) => {
    const reserva = reservarTurnos.find(reserva => reserva.id === id);
    if (reserva.cantidad > 1) {
        reserva.cantidad--;
    } else {
        eliminarDeReserva(reserva.id);
    }
    divContReservas.innerHTML = "";
    mostrarReservas();
};

// ----------
// sumo de uno 
const sumarAReserva = (id) => {
    const reserva = reservarTurnos.find(reserva => reserva.id === id);
    reserva.cantidad++;
    divContReservas.innerHTML = ""
    mostrarReservas();
};

//FIN DE BOTONES

// fin funciones

// --------
// reservas "carrito"
const mostrarReservas = () => {
    reservarTurnos.forEach(reserva => {
        const divReservas = document.createElement("div");
        divReservas.className = "divReservas";
        divReservas.innerHTML = `
                                <img class="imagen" src="${reserva.url}" alt="${reserva.nombre}">
                                        <p> Servicio <br> ${reserva.nombre} </p>
                                        <p class="precio"> Precio <br>$${reserva.precio}</p>
                                        <p class="tiempo"> Tiempo <br> ${reserva.tiempo} min </p>
                                        <p> Turnos <br>${reserva.cantidad} </p>
                                    <div class="botones">
                                        <button id="botonEliminar${reserva.id}">
                                            eliminar
                                        </button>
                                        <button id="botonMenos${reserva.id}">
                                            -
                                        </button>
                                        <button id="botonMas${reserva.id}">
                                            +
                                        </button>
                                        </div>
                                </div>
                                `;
        divContReservas.appendChild(divReservas);
        botones(reserva);

    })

    //---------
    if (reservarTurnos.length > 0) {
        finalizar();
    }
} //cierre
mostrarReservas();


