// Clase para los productos
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Instancias de la clase Producto
const paletaProfesional = new Producto(1, 'Paleta Profesional', 220990);
const paletaAmateur = new Producto(2, 'Paleta Amateur', 120990);
const paletaJunior = new Producto(3, 'Paleta Junior', 90990);

// Array para el carrito
const carrito = [];

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(`${producto.nombre} agregada al carrito.`);
}

// Función para calcular el total del carrito
function calcularTotal() {
    let total = 0;

    // Aca uso un bucle while para sumar los precios ( Puede ser?)
    let i = 0;
    while (i < carrito.length) {
        total += carrito[i].precio;
        i++;
    }

    // if para verificar el total y mostrar un mensaje
    if (total > 0) {
        console.log(`Total a pagar: ${total.toFixed(2)} CLP.`);
    } else {
        console.log('El carrito está vacío. Agrega productos antes de calcular el total.');
    }
}

// Agrego algunos productos al carrito al cargar la página. 
agregarAlCarrito(paletaProfesional);
agregarAlCarrito(paletaAmateur);
agregarAlCarrito(paletaJunior);