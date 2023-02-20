/*HEADER */
const header = document.getElementById ("header");
const divNav = document.createElement ("div");
divNav.className = "divNav";
divNav.innerHTML = `
                <div class="logo">
                <a href="./index.html">
                    <img src="./img/logo.png" alt="logo">
                </a>
                </div>
                <nav class="navbar">
                <div class="menuIcono">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul class="menu">
                    <li><a href="./pages/servicios.html">SERVICIOS</a></li>
                    <li><a href="./pages/turnos.html">TURNOS</a></li>
                    <li><a href="./pages/contactos.html">CONTACTOS</a></li>
                </ul>
                </nav>
                <div class="cuenta">
                <a href="./pages/cuenta">
                    <img src="./img/usuario.png" alt="emoji usuario">Mi Cuenta 
                </a>`;

header.appendChild(divNav)
/* HERO */
const index  = document.getElementById("index");
const section = document.createElement ("section");
section.className = "hero";
section.innerHTML =
                    `
                    <div class="heroTexto">
                        <p>
                            Stylig de <br>
                            <span>Pestañas</span> <br>
                            transforma tu mirada.
                        </p>
                        <button class="heroBoton">
                            CONTACTANOS
                        </button>
                    </div>
                    `;

index.appendChild(section);

/* FOOTER */
const footer = document.getElementById ("footer");
const divFooter = document.createElement ("div");
divFooter.className = "divFooter";
divFooter.innerHTML = `
                    <p>CONTACTOS</p>
                    <div class="contactos">
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src="./img/facebook.png" alt="logo de facebook"></a>
                        <a href="https://wa.me/qr/JGAHWZ2KNFIDP1" target="_blank">
                            <img src="./img/whatsapp.png" alt="logo whatsapp"></a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src="./img/instagram.png" alt="logo instagram"></a>
                        <a href="mailto:andreatanghetti@gmail.com">
                            <img src="./img/gmail.png" alt="logo gmail"></a>
                        <a href="tel:3813284504">
                            <img src="./img/llamada-telefonica.png" alt="logo telefono"></a>
                    </div>
                    <p> Copyright &#169 2023 - Todos los derechos reservados</p>`;

footer.appendChild(divFooter);