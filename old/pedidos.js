const dayjs = require('dayjs');

const IVA = 0.21;

let nombreCliente = "Juan Pérez";
let direccionCliente = "Calle Falsa 123, Ciudad";
let telefonoCliente = "555-1234";
let subtotal = 110.00;
let stock = true;
let porcentajeDescuento = 0;
let fechaEntrega = dayjs().add(3, 'day').format('YYYY-MM-DD');

const productos = [
    { nombre: "Producto A", precio: 50.00, cantidad: 1 },
    { nombre: "Producto B", precio: 30.00, cantidad: 2 },
    { nombre: "Producto C", precio: 20.00, cantidad: 1 },
    { nombre: "Producto D", precio: 10.00, cantidad: 3 },
    { nombre: "Producto E", precio: 15.00, cantidad: 2 },
    { nombre: "Producto F", precio: 25.00, cantidad: 1 },
];

let clienteNormalizado = nombreCliente.toUpperCase();
let direccionNormalizada = direccionCliente.toUpperCase();
let telefonoNormalizado = telefonoCliente.replace(/-/g, '');

let tieneFragil = productos.includes(producto => producto.nombre.toLowerCase().includes('frágil'));

function comprobacionStock(productos) {
    if(!sotck){
        console.log("No hay stock disponible para este pedido.");
        return false;
    }
    return productos.every(producto => producto.cantidad > 0);
}

function porcentajeDescuento(subtotal) {
    if (subtotal >= 100) {
        return porcentajeDescuento = 0.05; // 5% de descuento
    } else {
        return porcentajeDescuento = 0; // No hay descuento
    }
}

function calcularTotal(subtotal, porcentajeDescuento) {
    const descuento = subtotal * porcentajeDescuento;
    const totalConDescuento = subtotal - descuento;
    const totalConIVA = totalConDescuento * (1 + IVA);
    return totalConIVA.toFixed(2);
}

function entregarPedido() {
    if (comprobacionStock(productos)) {
        const descuentoAplicado = porcentajeDescuento(subtotal);
        const totalFinal = calcularTotal(subtotal, descuentoAplicado);
        console.log(`Pedido entregado a ${clienteNormalizado} en ${direccionNormalizada}. Total a pagar: $${totalFinal} fecha de entrega: ${fechaEntrega}`);
    }
}

const resumenPedido = `
=========================================
🌱 TIENDA ECO - RESUMEN DEL PEDIDO 🌱
=========================================
👤 Cliente: ${clienteNormalizado}
📦 Productos: ${productos.join(", ")}
⚠️ ¿Contiene frágiles?: ${tieneFragil ? "Sí (Se requiere embalaje especial)" : "No"}

--- Desglose de Facturación ---
Subtotal inicial: ${subtotal.toFixed(2)}€
Descuento aplicado: ${porcentajeDescuento * 100}%
Subtotal tras descuento: ${subtotalConDescuento.toFixed(2)}€
Impuestos (IVA 21%): ${(subtotalConDescuento * IVA).toFixed(2)}€
-----------------------------------------
💶 TOTAL A PAGAR: ${total.toFixed(2)}€
=========================================
🚚 Fecha estimada de entrega: ${fechaEntrega}
=========================================
`;

console.log(resumenPedido);