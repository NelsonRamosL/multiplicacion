$(document).ready(function () {


    let cuentaAtras = numero => {
        //base case
        if (numero === 0) {
            return 0;
        } 
        console.log(numero);
        return cuentaAtras(numero - 1);
    };
    console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1
 




})