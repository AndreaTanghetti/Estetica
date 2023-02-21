const contenedor = document.getElementById("contenedor");

const divContenedor = document.createElement("div");
divContenedor.className = "divContenedor";
divContenedor.innerHTML = `
                        <div class="divTexto">
                        <h1 class="h1">Contactanos</h1>
                        <h2 class="h2">Déjanos tu consulta y en la brevedad nos comunicaremos con vos.</h2>
                        </div>
                        <div class="divGrid">
                        <div class="divForm">
                        <form >
                            <label>Ingrese su nombre</label>
                            <input type="text">

                            <label for=""> Numero de contacto</label>
                            <input type="number">

                            <label for="">Consulta</label>
                            <input class="inputComentario"type="text">
                            <button class="botonForm">Enviar</button>
                            </form>
                        </div>
                        <div class="info">

                        <div>
                        <img src="../img/icons8-marcador-50.png" alt="icono pin ubicacion">
                        <p>Direccion <br> Av. 24 de Septiembre 400 <br> San Miguel de Tucumán, Tucumán</p>
                    </div>
                    <div>
                        <img src="../img/icons8-reloj-cuadrado-50.png" alt="icono reloj">
                        <p>Horario <br> Lunes a Sabado <br> Desde 14:00 a 20:00 <br> Domingo cerrado </p>
                    </div>
                        </div>
                        </div>
                        `;
contenedor.appendChild(divContenedor)

