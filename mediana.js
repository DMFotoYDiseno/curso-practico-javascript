


function calcularMediana(lista) {
 /*   let sumaLista = 0;

     for(let i= 0; i < lista.length; i++) {
        sumaLista += lista[i];  
    } */

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, NuevoElemento) {
            return valorAcumulado + NuevoElemento;
        }
    );
    const medianaLista = sumaLista / lista.length;

    return medianaLista;
}