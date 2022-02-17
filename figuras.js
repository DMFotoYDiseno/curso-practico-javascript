// Cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El perímetro del cuadrado mide: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado
};

//console.log("El área del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd

//Triangulo
console.group("Triangulo")
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = "5.5";

//const ladoTriangulo = 5;
// console.log(
//    "Los lados del triángulo miden: " 
//    + ladoTriangulo + " cm, " 
//    + ladoTriangulo + " cm, " 
//    + baseTriangulo + " cm"
//);
//console.log("La altura del triángulo es: " + alturaTriangulo);
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");
function areaTriangulo(base, altura) {
    return (base * altura)/2;
};
//console.log("El área del triángulo es: " + areaTriangulo + " cm2");
console.groupEnd

// Circulo

console.group("Circulo");

//const radioCirculo = 4;
//console.log("El radio del cículo es:" + radioCirculo + " cm");
//const PI = Math.PI;
function perimetroCirculo(radio) {
    return (radio * 2) * Math.PI
};
//console.log("El perímetro del cículo es:" + perimetroCirculo + " cm");
function areaCirculo(radio) {
    return (radio * radio) * Math.PI;
};
//console.log("El área del cículo es:" + areaCirculo + " cm2");

console.groupEnd;

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perimetro del cuadrado es: " + perimetro + "cm");
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado es: " + area + "cm");
}