
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
                            CONTACTANOS
                        </button>
                    </div>
                    `;

index.appendChild(section);


const heroBoton = document.getElementById("heroBoton");

heroBoton.addEventListener("click", function () {
    window.location.href = "./pages/contactos.html"
        ;
});