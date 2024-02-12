//Calcular el costo total de la compra con descuentos
function calcularCostoTotal(cantidadSandwiches, cantidadBebidas, descuento) {
    const precioSandwich = 3500;
    const precioBebida = 1250;
  
    let costoSandwiches = cantidadSandwiches * precioSandwich;
    let costoBebidas = cantidadBebidas * precioBebida;
  
    let costoTotal = costoSandwiches + costoBebidas;
    
    // Descuento si es válido
    if (descuento > 0 && descuento <= 100) {
      const descuentoAplicado = (descuento / 100) * costoTotal;
      costoTotal -= descuentoAplicado;
    }
    
    return costoTotal;
  }
  
  // Validar la cantidad ingresada
  function validarCantidad(cantidad) {
    return !isNaN(cantidad) && cantidad >= 0 && cantidad % 1 === 0;
  }
  
  // Realizar la compra
  function realizarCompra() {
    let cantidadSandwiches;
    let cantidadBebidas;
    let descuento;
    let email;
    let direccionEntrega;
    
  
    alert("¡Bienvenido a la sangucheria del placer!");
  
    // Solicitar la cantidad de sandwiches
    while (true) {
      cantidadSandwiches = parseInt(prompt("Estimado usuario: Ingrese la cantidad de sandwiches que desea comprar:"));
      if (validarCantidad(cantidadSandwiches)) {
        break;
      }
      alert("Estimado usuario: La cantidad ingresada no es válida. Por favor ingrese un número entero positivo.");
    }
  
    // Solicitar la cantidad de bebidas
    while (true) {
      cantidadBebidas = parseInt(prompt("Estimado usuario: Ingrese la cantidad de bebidas que desea comprar:"));
      if (validarCantidad(cantidadBebidas)) {
        break;
      }
      alert("Estimado usuario: La cantidad ingresada no es válida. Por favor ingrese un número entero positivo.");
    }
  
    // Solicitar el descuento
    while (true) {
      descuento = parseInt(prompt("Estimado usuario: Ingrese el porcentaje de descuento que tiene (0 si no tiene descuento):"));
      if (validarCantidad(descuento)) {
        break;
      }
      alert("El descuento ingresado no es válido. Por favor ingrese un número entero positivo.");
    }
  
    // Solicitar el email para enviar la factura de compra
    email = prompt("Estimado usuario: Por favor, ingrese su dirección de correo electrónico para recibir la factura:");
  
    // Solicitar la dirección de entrega
    direccionEntrega = prompt("Estimado usuario: Por favor, ingrese la dirección de entrega de su pedido:");
    
  
    // Calcular el costo total
    const costoTotal = calcularCostoTotal(cantidadSandwiches, cantidadBebidas, descuento);
  
    // Mostrar el resultado y la información de entrega
    alert(`El costo total de su compra es: $${costoTotal}. La factura será enviada a su dirección de correo electrónico: ${email}. Su pedido será entregado en la dirección: ${direccionEntrega}. Su pedido ya se encuentra en preparación y llegará entre las 18hs y las 19:30hs. ¡Muchas gracias por su compra!`);
    console.log(`Compra realizada: ${cantidadSandwiches} sandwiches y ${cantidadBebidas} bebidas.`);
    console.log(`Descuento aplicado: ${descuento}%`);
    console.log(`Costo total: $${costoTotal}`);
    console.log(`Dirección de entrega: ${direccionEntrega}`);
    console.log(`Pedido en preparación y llegará entre las 18hs y las 19:30hs.`);
  }
  
  // Realizar la compra
  realizarCompra();
  