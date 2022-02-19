function calcularAlturaTriangulo(lado1, lado2, lado3) {
    var alturaTriangulo;

    if (lado1 == lado2) {
        alturaTriangulo = Math.sqrt((lado1 * lado1) + ((lado3/2) * (lado3/2)));
    }
    else {
        if (lado2 == lado3){
            alturaTriangulo = Math.sqrt((lado2 * lado2) + ((lado1/2) * (lado1/2)));
        }
        else {
            if (lado3 == lado1){
                alturaTriangulo = Math.sqrt((lado3 * lado3) + ((lado2/2) * (lado2/2)));
            }
            else {
                alturaTriangulo =0;
            }
        }
    }
    return alturaTriangulo
}
