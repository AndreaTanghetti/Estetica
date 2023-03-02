const botonMenu = document.getElementById("boton")
const listaMenu = document.getElementById("lista")
botonMenu.onclick = () => {
listaMenu.classList.toggle("navMenu_visible");

listaMenu.classList.contains("navMenu_visible") ? botonMenu.setAttribute("aria-label", "cerrar menu") : botonMenu.setAttribute("aria-label", "abrir menu");

}, { passive: true };


