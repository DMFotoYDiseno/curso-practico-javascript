const precioOriginal = 120;
const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento  = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento/100));
    return precioConDescuento
}

function onClickButtonCalcular(){
    const precioHTML = document.getElementById("inputPrecio");
    const valorPrecioHTML = precioHTML.value;
    const descuentoHTML = document.getElementById("inputDescuento");
    const valorDescuentoHTML = descuentoHTML.value;
    const resultado = calcularPrecioConDescuento(valorPrecioHTML, valorDescuentoHTML);
    const resultadoHTML = document.getElementById("precioResultado");
    resultadoHTML.innerText = "El precio con descuento es: " + resultado;
}
/* console.log ({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}); */
