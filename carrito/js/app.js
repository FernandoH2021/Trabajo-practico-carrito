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
    id: lista.querySelector("a").getAttribute("data - id"),
  };

  //funcion insertar carrito

  insertarCarrito(infoCarrito);
}
function insertarCarrito(lista) {
  const row = document.createElement("tr");

  row.innerHTML = `
<td>
<img src="${lista.imagen}" width=100>
</td>

<td>${lista.titulo}</td>
<td>${lista.precio}</td>
<td>
<a href="#" class="borrar-lista" data-id = "${lista}">X</a>
</td>
`;

  listaAccesorios.appendChild(row); //Por medio de appendChild podemos incluir en un nodo un nuevo hijo, de esta manera.

  guardarListaLocalStorage(lista);
}

function eliminarLista(e) {
  e.preventDefault();

  let lista, listaId;

  if (e.target.classList.contains("borrar-lista")) {
    e.target.parentElement.parentElement.remove();
    lista = e.target.parentElement.parentElement;
    listaId = lista.querySelector("a").getAttribute(data-id);    
  }
  eliminarListaLocalStorage(listaId);

}

//funcion vaciar carrito

function vaciarCarrito(){
  while(listaAccesorios.firstChild){
    listaAccesorios.removeChild(listaAccesorios.firstChild);    
  }
  vaciarLocalStorage();
  return false;

}
function guardarListaLocalStorage(lista){
let lista;
lista = obtenerListaLocalStorage();
lista.push(lista);

localStorage.setItem("lista", JSON.stringify(lista));

}

function obtenerListaLocalStorage(){
  let listaLS;
if(localStorage.getItem(lista) === null){ //=== estricta igualdad
  listaLS = [];
  
}
else{
  listaLS = JSON.parse(localStorage.getItem("lista"));
}
return listaLS;

}
function leerLocalStorage(){
  let listaLS;
  listaLS = obtenerListaLocalStorage();
  listaLS.forEach(function(lista){
    const row = document.createElement("tr");
    row.innerHTML = `


    `;

  });
}