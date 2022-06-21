//variables
const carrito = document.getElementById("carrito");
const lista = document.getElementById("lista-carrito");
const listaAccesorios = document.querySelector("lista-carrito tbody");
const vaciarCarrito = document.getElementById("vaciar-carrito");

//funcion
cargarEventListeners();

function cargarEventListeners() {
  lista.addEventListener("click", comprarLista);

  carrito.addEventListener("click", eliminarLista);

  vaciarCarrito.addEventListener("click", vaciarCarrito);

  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

//carga accesorios al carrito

function comprarLista(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar carrito")) {
    const lista = e.target.parentElement.parentElement; //parentElement devuelve el padre del elemento o null sino tiene.
    leerDatosLista(lista);
  }
}

//funcion para leer los datos de la lista

function leerDatosLista(lista) {
  const infoLista = {
    imagen: lista.querySelector("img").src,
    titulo: lista.querySelector("h4").textContent,
    precio: lista.querySelector(".precio span").textContent,
    id: lista.querySelector("a").getAttribute(data - id),
  };
}
