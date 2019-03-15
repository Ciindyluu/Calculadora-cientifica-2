var operando1
var operando2
var operacion
var pii = 3.14159

function init() {
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var resultado2 = document.getElementById("resultado2");
    var borrar = document.getElementById("borrar");
    var quitarUno = document.getElementById("quitarUno");


    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var residuo = document.getElementById("residuo");
    var exponencial = document.getElementById("exponencial");
    var igual = document.getElementById("igual");
    var raiz = document.getElementById("raiz");
    var factorial = document.getElementById("factorial");
    var factorialSuma = document.getElementById("factorialSuma");
    var alCuadrado = document.getElementById("alCuadrado");
    var sign = document.getElementById("sign");
    var alCubo = document.getElementById("alCubo");
    var pi = document.getElementById("pi");

    var punto = document.getElementById("punto");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    
    //FUNCIONALIDAD

    function numnuevo() {
        if (resultado2.textContent.includes("=")) {
            resultado.textContent = "0"
            resultado2.textContent = "0"
        }
    }

    uno.onclick = function (e) {
        numnuevo()
        if (resultado.textContent == "0") {
            resultado.textContent = "1"
            parseFloat(resultado.textContent);
            if (resultado2.textContent == "0") {
                resultado2.textContent = "1"
                parseFloat(resultado2.textContent);
            }
            else {
                resultado2.textContent = resultado2.textContent + "1"
                parseFloat(resultado2.textContent);
            }
        }
        else {
            resultado.textContent = resultado.textContent + "1"
            parseFloat(resultado.textContent);
            resultado2.textContent = resultado2.textContent + "1"
            parseFloat(resultado2.textContent);
        }
    }

    dos.onclick = function (e) {
        numnuevo()
        if (resultado.textContent == "0") {
            resultado.textContent = "2"
            parseFloat(resultado.textContent);
            if (resultado2.textContent == "0") {
                resultado2.textContent = "2"
                parseFloat(resultado2.textContent);
            }
            else {
                resultado2.textContent = resultado2.textContent + "2"
                parseFloat(resultado2.textContent);
            }
        }
        else {
            resultado.textContent = resultado.textContent + "2"
            parseFloat(resultado.textContent);
            resultado2.textContent = resultado2.textContent + "2"
            parseFloat(resultado2.textContent);
        }
    }

    tres.onclick = function (e) {
        numnuevo()
        if (resultado.textContent == "0") {
            resultado.textContent = "3"
            parseFloat(resultado.textContent);
            if (resultado2.textContent == "0") {
                resultado2.textContent = "3"
                parseFloat(resultado2.textContent);
            }
            else {
                resultado2.textContent = resultado2.textContent + "3"
                parseFloat(resultado2.textContent);
            }
        }
        else {
            resultado.textContent = resultado.textContent + "3"
            parseFloat(resultado.textContent);
            resultado2.textContent = resultado2.textContent + "3"
            parseFloat(resultado2.textContent);
        }
    }

    cuatro.onclick = function (e) {
        numnuevo()
        if (resultado.textContent == "0") {
            resultado.textContent = "4"
            parseFloat(resultado.textContent);
            if (resultado2.textContent == "0") {
                resultado2.textContent = "4"
                parseFloat(resultado2.textContent);
            }
            else {
                resultado2.textContent = resultado2.textContent + "4"
                parseFloat(resultado2.textContent);
            }
        }
        else {
            resultado.textContent = resultado.textContent + "4"
            parseFloat(resultado.textContent);
            resultado2.textContent = resultado2.textContent + "4"
            parseFloat(resultado2.textContent);
        }
    }

    cinco.onclick = function (e) {
        numnuevo()
        if (resultado.textContent == "0") {
            resultado.textContent = "5"
            parseFloat(resultado.textContent);
            if (resultado2.textContent == "0") {
                resultado2.textContent = "5"
                parseFloat(resultado2.textContent);
            }
            else {
                resultado2.textContent = resultado2.textContent + "5"
                parseFloat(resultado2.textContent);
            }
        }
        else {
            resultado.textContent = resultado.textContent + "5"
            parseFloat(resultado.textContent);
            resultado2.textContent = resultado2.textContent + "5"
            parseFloat(resultado2.textContent);
        }
    }

    seis.onclick = function (e) {
        numnuevo()
        if (resultado.textContent == "0") {
            resultado.textContent = "6"
            parseFloat(resultado.textContent);
            if (resultado2.textContent == "0") {
                resultado2.textContent = "6"
                parseFloat(resultado2.textContent);
            }
            else {
                resultado2.textContent = resultado2.textContent + "6"
                parseFloat(resultado2.textContent);
            }
        }
        else {
            resultado.textContent = resultado.textContent + "6"
            parseFloat(resultado.textContent);
            resultado2.textContent = resultado2.textContent + "6"
            parseFloat(resultado2.textContent);
        }
    }

    siete.onclick = function (e) {
        numnuevo()
        if (resultado.textContent == "0") {
            resultado.textContent = "7"
            parseFloat(resultado.textContent);
            if (resultado2.textContent == "0") {
                resultado2.textContent = "7"
                parseFloat(resultado2.textContent);
            }
            else {
                resultado2.textContent = resultado2.textContent + "7"
                parseFloat(resultado2.textContent);
            }
        }
        else {
            resultado.textContent = resultado.textContent + "7"
            parseFloat(resultado.textContent);
            resultado2.textContent = resultado2.textContent + "7"
            parseFloat(resultado2.textContent);
        }
    }

    ocho.onclick = function (e) {
        numnuevo()
        if (resultado.textContent == "0") {
            resultado.textContent = "8"
            parseFloat(resultado.textContent);
            if (resultado2.textContent == "0") {
                resultado2.textContent = "8"
                parseFloat(resultado2.textContent);
            }
            else {
                resultado2.textContent = resultado2.textContent + "8"
                parseFloat(resultado2.textContent);
            }
        }
        else {
            resultado.textContent = resultado.textContent + "8"
            parseFloat(resultado.textContent);
            resultado2.textContent = resultado2.textContent + "8"
            parseFloat(resultado2.textContent);
        }
    }

    nueve.onclick = function (e) {
        numnuevo()
        if (resultado.textContent == "0") {
            resultado.textContent = "9"
            parseFloat(resultado.textContent);
            if (resultado2.textContent == "0") {
                resultado2.textContent = "9"
                parseFloat(resultado2.textContent);
            }
            else {
                resultado2.textContent = resultado2.textContent + "9"
                parseFloat(resultado2.textContent);
            }
        }
        else {
            resultado.textContent = resultado.textContent + "9"
            parseFloat(resultado.textContent);
            resultado2.textContent = resultado2.textContent + "9"
            parseFloat(resultado2.textContent);
        }
    }

    cero.onclick = function (e) {
        numnuevo()
        if (resultado.textContent != "0") {
            resultado.textContent = resultado.textContent + "0"
            parseFloat(resultado.textContent);
            resultado2.textContent = resultado2.textContent + "0"
            parseFloat(resultado2.textContent);
        }
    }

    punto.onclick = function (e) {
        if (resultado.textContent.includes(".")) {
            resultado.textContent = resultado.textContent
            resultado2.textContent = resultado2.textContent
        }
        else {
            resultado.textContent = resultado.textContent + "."
            resultado2.textContent = resultado2.textContent + "."
        }
    }

    //OPERACIONES

    borrar.onclick = function (e) {
        limpiar(true)
    };

    reset.onclick = function (e) {
        resetear()
    };

    quitarUno.onclick = function (e) {
        quitaUno()
    }

    function validarCero(symbol) {
        if (validarSigno() && !resultado2.textContent.includes("="))
            return
        if (resultado2.textContent.trim() != "0") {
            if (resultado2.textContent.includes("=")) {
                operando1 = resultado2.textContent.split('=')[1]
                resultado2.textContent = operando1 + symbol
                operacion = symbol.trim()
                limpiar(false)
            }
            else {
                operando1 = resultado.textContent
                operacion = symbol.trim()
                limpiar(false)
                resultado2.textContent = resultado2.textContent + symbol
            }
        }
    }

    function validarSigno() {
        var tieneSigno = false;
        if (resultado2.textContent.includes("+")
            || resultado2.textContent.includes("*")
            || resultado2.textContent.includes("/"))
            tieneSigno = true;
        else
            tieneSigno = false
        return tieneSigno
    }

    suma.onclick = function (e) {
        validarCero(" + ")
    };

    resta.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            resultado2.textContent = operando1 + " - "
            operacion = "-"
            limpiar(false)
        }
        else {
            if (resultado.textContent == " ") {
                operando1 = "-" + resultado.textContent.trim()
                resultado.textContent = operando1
                resultado2.textContent = operando1
            }
            else {
                operando1 = resultado.textContent
                operacion = "-"
                limpiar(false)
                resultado2.textContent = resultado2.textContent + " - "
            }
        }
    };

    multiplicacion.onclick = function (e) {
        validarCero(" * ")
    };

    division.onclick = function (e) {
        validarCero(" / ")
    };

    residuo.onclick = function (e) {
        validarCero(" % ")
    };

    exponencial.onclick = function (e) {
        validarCero(" ^ ")
    };

    igual.onclick = function (e) {
        if (!resultado2.textContent.includes("=")) {
            operando2 = resultado.textContent
            var result = resultado2.textContent
            resolver()
            resultado2.textContent = result + " = " + resultado.innerHTML
        }
    };

    factorial.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            operacion = "!"
            var cantidad1 = operando1
            resolver()
            resultado2.textContent = cantidad1 + "! = " + resultado.textContent
        }
        else {
            operando1 = resultado.textContent
            operacion = "!"
            var result = resultado2.textContent
            resolver()
            resultado2.textContent = result + "! = " + resultado.textContent
        }
    };

    factorialSuma.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            operacion = "!+"
            var cantidad1 = operando1
            resolver()
            resultado2.textContent = cantidad1 + "!+ = " + resultado.textContent
        }
        else {
            operando1 = resultado.textContent
            operacion = "!+"
            var result = resultado2.textContent
            resolver()
            resultado2.textContent = result + "!+ = " + resultado.textContent
        }
    };

    alCuadrado.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            operacion = "2"
            var cantidad1 = operando1
            resolver()
            resultado2.textContent = cantidad1 + "² = " + resultado.textContent
        }
        else {
            operando1 = resultado.textContent
            operacion = "2"
            var result = resultado2.textContent
            resolver()
            resultado2.textContent = result + "² = " + resultado.textContent
        }
    };

    alCubo.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            operacion = "3"
            var cantidad1 = operando1
            resolver()
            resultado2.textContent = cantidad1 + "³ = " + resultado.textContent
        }
        else {
            operando1 = resultado.textContent
            operacion = "3"
            var result = resultado2.textContent
            resolver()
            resultado2.textContent = result + "³ = " + resultado.textContent
        }
    };

    raiz.onclick = function (e) {
        // validarCero(" √")
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            operacion = "raiz"
            var cantidad1 = operando1
            resolver()
            resultado2.textContent = " √" + cantidad1 + " = " + resultado.textContent
        }
        else {
            operando1 = resultado.textContent
            operacion = "raiz"
            var result = resultado2.textContent
            resolver()
            resultado2.textContent = " √" + result + " = " + resultado.textContent
        }
    };

    sign.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            operacion = "sign"
            var cantidad1 = operando1
            resolver()
            resultado2.textContent = cantidad1 + resultado.textContent
        }
        else {
            if (resultado.textContent.trim() != "") {
                operando1 = resultado.textContent
                operacion = "sign"
                var result = resultado2.textContent
                resolver()
                resultado2.textContent = resultado.textContent
            }
        }
    };


    // FUNCIÓN FACTORIAL
    function formulafactorial(num) {
        var total = 1;
        if (num == 0) {
            total = 1;
        }
        for (var i = 1; i <= num; i++) {
            total *= i;
        }
        return total;
    }


    //METODOS
    function limpiar(esCE) {
        var esOperacion = false
        var zero = 0
        if (resultado2.textContent.includes("+")) {
            resultado2.textContent = resultado2.textContent.split("+")[0] + " + "
            operacion = "+"
            esOperacion = true
        }

        if (resultado2.textContent.includes("-")) {
            resultado2.textContent = resultado2.textContent.split("-")[0] + " - "
            operacion = "-"
            esOperacion = true
        }

        if (resultado2.textContent.includes("*")) {
            resultado2.textContent = resultado2.textContent.split("*")[0] + " * "
            operacion = "*"
            esOperacion = true
        }

        if (resultado2.textContent.includes("/")) {
            resultado2.textContent = resultado2.textContent.split("/")[0] + " / "
            operacion = "/"
            esOperacion = true
        }

        if (resultado2.textContent.includes("%")) {
            resultado2.textContent = resultado2.textContent.split("%")[0] + " % "
            operacion = "%"
            esOperacion = true
        }

        if (resultado2.textContent.includes("^")) {
            resultado2.textContent = resultado2.textContent.split("^")[0] + " ^ "
            operacion = "^"
            esOperacion = true
        }
        console.log("la bandera es " + esCE)
        if (esCE && !esOperacion) {
            resultado2.textContent = zero
        }
        resultado.textContent = zero
    };



    function resetear() {
        resultado.textContent = 0
        resultado2.textContent = 0
        operando1 = 0
        operando2 = 0
        operacion = ""
    };

    function quitaUno() {
        resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length - 1);
        resultado2.textContent = resultado2.textContent.substring(0, resultado2.textContent.length - 1);
    }

    function resolver() {
        var res = 0
        switch (operacion) {

            case "+":
                res = (parseFloat(operando1) + parseFloat(operando2))
                break;

            case "-":
                res = (parseFloat(operando1) - parseFloat(operando2))
                break;

            case "*":
                res = (parseFloat(operando1) * parseFloat(operando2))
                break;

            case "/":
                res = (parseFloat(operando1) / parseFloat(operando2))
                break;

            case "%":
                res = (parseFloat(operando1) % parseFloat(operando2))
                break;

            case "^":
                res = parseFloat(operando1) ** parseFloat(operando2)
                break;

            case "!":
                res = eval(formulafactorial(operando1))
                break;

            case "!+":
                var a = parseInt(operando1) + 1
                res = (parseInt(operando1) * (a) / 2)
                break;

            case "2":
                res = parseFloat(operando1) ** (2)
                break;

            case "3":
                res = parseFloat(operando1) ** (3)
                break;

            case "raiz":
                res = Math.sqrt(parseFloat(operando1))
                break;

            /*if (contentShowOperations.innerHTML.charCodeAt(0) < 48 || contentShowOperations.innerHTML.charCodeAt(0) > 57) {
                var secondPart = eval(secondNumber + "+" + 1);
                result = eval((secondNumber * secondPart) / 2);
                console.log(secondPart);
                console.log(result);
            } else {
                var firstPart = eval(firstNumber + "+" + 1);
                result = eval((firstNumber * firstPart) / 2);
                console.log(firstPart);
                console.log(result);
            }
            break;*/

            case "sign":
                res = parseFloat(operando1) * -1
                break;
        }

        resetear()
        resultado.textContent = res
    };

};