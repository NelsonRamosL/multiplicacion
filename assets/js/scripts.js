$(document).ready(function () {

    //  Fuciones

    // Funcion Verificar numero
    let verificar = (numero) => {
        if (numero >= 1 && numero <= 20) {
            return true;
        } else {
            return false;
        }
    }


    // Funcion multiplicar
    let multiplicar = (a) => {
        console.log("multiplicar ", a);
        for (let index = 1; index <= a; index++) {
            console.log(`${index} x ${numero} =`, index * a);
            document.write(`${index} x ${numero} =`, index * a);
            document.write("<br></br>");
        }
    }

    // funcion Factorial
    let factorial = (a) => {
        let res = 1;
        console.log("faltorial de ", a);
        for (let i = 1; i <= a; i++) {
            res = res * i;

            console.log(`factorial de ${i} es : ${res}`);
            document.write(`factorial de ${i} es : ${res}`);
            document.write("<br></br>");
        }
    }



    // inicio de codigo

    // Ingresar numero
    var numero = prompt("ingresar un numero");
    console.log(numero);
    document.write("<br><br><br><center>");

    // Verificar si numero es mayo igual a 1 y menor igual que 20
    if (verificar(numero) == false) {
        alert("número fuera del rango");

    } else {
        document.write("<h1>Multiplicar</h1><br><br><br>");
        // llamada arow function multiplicar
        multiplicar(numero);
        document.write("<br><br><br> <h1>Factorial</h1><br><br><br>");
        // llamada arow function Factorial
        factorial(numero);

    }







    document.write("<br><br><br></center>");


})