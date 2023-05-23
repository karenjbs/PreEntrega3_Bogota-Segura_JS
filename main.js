function Producto (id, nombre, precio, stock){
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;

}

const productos = [];

//INGRESO DE PRODUCTOS Y ENVIO AL ARRAY
function crearProducto() {
const nombre = document.getElementById ("nombre-producto").value;
const precio = parseFloat(document.getElementById("precio-producto").value);
const stock = parseInt(document.getElementById("stock-producto").value);

const producto = new Producto(productos.length + 1, nombre, precio, stock);
productos.push(producto);

}

//AGREGA PRODUCTOS, LIMPIA, MUESTRAS Y GUARDA EN SESSIONSTORAGE
function agregarProducto() {
    crearProducto();
    limpiarCampos();
    mostrarProductos();
    sessionStorage.setItem("productos", JSON.stringify(productos));
  }

  //LIMPIA LOS IMPUTS
function limpiarCampos() {
    document.getElementById("nombre-producto").value = "";
    document.getElementById("precio-producto").value = "";
    document.getElementById("stock-producto").value = "";
}

//ENVIA LA INFORMACION
const botonAgregar = document.getElementById("boton-agregar");
botonAgregar.addEventListener("click", agregarProducto);

//MUESTRA PRODUCTOS
function mostrarProductos() {
    const listaProductos = document.getElementById("lista-productos");
  
    // Vaciar el contenido actual de la lista de productos
    listaProductos.innerHTML = "";
  
    // Recorrer el array de productos y generar el HTML para cada producto
    productos.forEach(function (producto) {
      const productoHTML = `
        <li>
          <strong>ID:</strong> ${producto.id} <br>
          <strong>Nombre:</strong> ${producto.nombre} <br>
          <strong>Precio:</strong> ${producto.precio} <br>
          <strong>Stock:</strong> ${producto.stock} <br>
        </li>
      `;
      listaProductos.innerHTML += productoHTML;
    });
  }

//EVENTOS PARA FORMULARIO
const nombreProducto = document.getElementById("nombre-producto");
const precioProducto = document.getElementById("precio-producto");
const stockProducto = document.getElementById("stock-producto");

nombreProducto.addEventListener("blur", function (e){
    const validarCampo = e.target.value;
    if (validarCampo.length === 0){
        console.log("Debes Escribir un dato");
        document.getElementById ("nombre-producto").focus();
    }
});

precioProducto.addEventListener("blur", function (e){
    const validarCampo = e.target.value;
    if (validarCampo.length === 0){
        console.log("Debes Escribir un dato");
        document.getElementById ("precio-producto").focus()
    }
});

stockProducto.addEventListener("blur", function (e){
    const validarCampo = e.target.value;
    if (validarCampo.length === 0){
        console.log("Debes Escribir un dato");
        document.getElementById ("stock-producto").focus()
    }
});

mostrarProductos();