const precioOriginal = 120;
const descuento = 18;
const cupones = [
    "Descuento1",
    "Descuento2",
    "Descuento3",
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento  = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento/100));
    return precioConDescuento;
}

function onClickButtonCalcular(){
    const precioHTML = document.getElementById("inputPrecio");
    const valorPrecioHTML = precioHTML.value;

    const cuponHTML = document.getElementById("inputCupon");
    const valorCuponHTML = cuponHTML.value;
    var valorDescuentoHTML = 0;

    switch(valorCuponHTML) {
        case cupones[0]:
            valorDescuentoHTML = 10;
        break;
        case cupones[1]:
            valorDescuentoHTML = 20;
        break;
        case cupones[2]:
            valorDescuentoHTML = 30;
        break;
    }

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
