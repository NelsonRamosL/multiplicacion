$(document).ready(function () {

    //  Fuciones
    let verificar = (numero) => {
        if (numero >= 1 && numero <= 20) {
            return true;
        } else {
            return false;
        }
    }


    let multiplicar = (a) => {
        console.log("multiplicar", a);
for (let index = 1; index <= a; index++) {
    console.log(`${index} x ${numero} =`,index*a);
    document.write(`${index} x ${numero} =`,index*a);
    document.write("<br></br>");
}

    }


    let factorial = (a) => {
        console.log("faltorial", a);
    }



    // inicio

    // Ingresar numero
    var numero = prompt("ingresar un numero");
    console.log(numero);


    // Verificar si numero es mayo igual a 1 y menor igual que 20
     if (verificar(numero) == false) {
        alert("número fuera del rango");

    } else {

        // llamada arow function multiplicar
        multiplicar(numero);

        // llamada arow function Factorial
        factorial(numero);

    }










})