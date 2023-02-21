const botonMenu = document.getElementById("boton")
const listaMenu = document.getElementById("lista")
botonMenu.addEventListener('click', () => {
  listaMenu.classList.toggle("navMenu_visible");

  if (listaMenu.classList.contains("navMenu_visible")) {
    botonMenu.setAttribute("aria-label", "cerrar menu");
  } else {
    botonMenu.setAttribute("aria-label", "abrir menu");
  }
}, { passive: true });
