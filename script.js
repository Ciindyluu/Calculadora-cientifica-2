var operando1
var operando2
var operacion

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

    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1"
        parseFloat(resultado.textContent);
        resultado2.textContent = resultado2.textContent + "1"
        parseFloat(resultado2.textContent);
    }

    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2"
        parseFloat(resultado.textContent);
        resultado2.textContent = resultado2.textContent + "2"
        parseFloat(resultado2.textContent);
    }

    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3"
        parseFloat(resultado.textContent);
        resultado2.textContent = resultado2.textContent + "3"
        parseFloat(resultado2.textContent);
    }

    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4"
        parseFloat(resultado.textContent);
        resultado2.textContent = resultado2.textContent + "4"
        parseFloat(resultado2.textContent);
    }

    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5"
        parseFloat(resultado.textContent);
        resultado2.textContent = resultado2.textContent + "5"
        parseFloat(resultado2.textContent);
    }

    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6"
        parseFloat(resultado.textContent);
        resultado2.textContent = resultado2.textContent + "6"
        parseFloat(resultado2.textContent);
    }

    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7"
        parseFloat(resultado.textContent);
        resultado2.textContent = resultado2.textContent + "7"
        parseFloat(resultado2.textContent);
    }

    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8"
        parseFloat(resultado.textContent);
        resultado2.textContent = resultado2.textContent + "8"
        parseFloat(resultado2.textContent);
    }

    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9"
        parseFloat(resultado.textContent);
        resultado2.textContent = resultado2.textContent + "9"
        parseFloat(resultado2.textContent);
    }

    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0"
        parseFloat(resultado.textContent);
        resultado2.textContent = resultado2.textContent + "0"
        parseFloat(resultado2.textContent);
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

    suma.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " + "
    }

    resta.onclick = function (e) {
        resultado.textContent = resultado.textContent + " - "
        resultado2.textContent = resultado2.textContent + " - "
    }

    multiplicacion.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " * "
    }

    division.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " / "
    }

    factorial.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " !"
    }

    raiz.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " √ "
    }

    factorialSuma.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " !+"
    }

    residuo.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " ! "
    }

    alCuadrado.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + "²"
    }

    exponencial.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " ^ "
    }

    alCubo.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + "³"
    }

    pi.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " * π "
    }

    igual.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " = "
    }

    sign.onclick = function (e) {
        resultado2.textContent = resultado2 + " +- "
    }


    //OPERACIONES

    borrar.onclick = function (e) {
        limpiar()
    };

    reset.onclick = function (e) {
        resetear()
    };

    quitarUno.onclick = function (e) {
        quitaUno()
    }

    suma.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            resultado2.textContent = operando1 + " + "
            operacion = "+"
            limpiar()
        }
        else {
            operando1 = resultado.textContent
            operacion = "+"
            limpiar()
            resultado2.textContent = resultado2.textContent + " + "
        }
    };

    resta.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            resultado2.textContent = operando1 + " - "
            operacion = "-"
            limpiar()
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
                limpiar()
                resultado2.textContent = resultado2.textContent + " - "
            }
        }
    };

    multiplicacion.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            resultado2.textContent = operando1 + " * "
            operacion = "*"
            limpiar()
        }
        else {
            operando1 = resultado.textContent
            operacion = "*"
            limpiar()
            resultado2.textContent = resultado2.textContent + " * "
        }
    };

    division.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            resultado2.textContent = operando1 + " / "
            operacion = "/"
            limpiar()
        }
        else {
            operando1 = resultado.textContent
            operacion = "/"
            limpiar()
            resultado2.textContent = resultado2.textContent + " / "
        }
    };

    residuo.onclick = function (e) {
        if (resultado2.textContent.includes("= 0")) {
            operando1 = resultado2.textContent.split('= 0')[1]
            resultado2.textContent = operando1 + " % "
            operacion = "%"
            limpiar()
        }
        else {
            operando1 = resultado.textContent
            operacion = "%"
            limpiar()
            resultado2.textContent = resultado2.textContent + " % "
        }
    };

    exponencial.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            resultado2.textContent = operando1 + " ^ "
            operacion = "**"
            limpiar()
        }
        else {
            operando1 = resultado.textContent
            operacion = "**"
            limpiar()
            resultado2.textContent = resultado2.textContent + " ^ "
        }
    };

    igual.onclick = function (e) {
        operando2 = resultado.textContent
        var result = resultado2.textContent
        resolver()
        resultado2.textContent = result + " = " + resultado.innerHTML
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
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            operacion = "raiz"
            var cantidad1 = operando1
            resolver()
            resultado2.textContent = cantidad1 + " √ = " + resultado.textContent
        }
        else {
            operando1 = resultado.textContent
            operacion = "raiz"
            var result = resultado2.textContent
            resolver()
            resultado2.textContent = result + " √ = " + resultado.textContent
        }
    };

    pi.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            operacion = "pi"
            var cantidad1 = operando1
            resolver()
            resultado2.textContent = cantidad1 + " * π = " + resultado.textContent
        }
        else {
            operando1 = resultado.textContent
            operacion = "pi"
            var result = resultado2.textContent
            resolver()
            resultado2.textContent = result + " * π = " + resultado.textContent
        }
    };

    sign.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            operacion = "sign"
            var cantidad1 = operando1
            resolver()
            resultado2.textContent = cantidad1 + " +- = " + resultado.textContent
        }
        else {
            operando1 = resultado.textContent
            operacion = "sign"
            var result = resultado2.textContent
            resolver()
            resultado2.textContent = result + " +- = " + resultado.textContent
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
    function limpiar() {
        if (resultado2.textContent.includes("+")) {
            resultado2.textContent = resultado2.textContent.split("+")[0] + " + "
            operacion = "+"
        }

        if (resultado2.textContent.includes("-")) {
            resultado2.textContent = resultado2.textContent.split("-")[0] + " - "
            operacion = "-"
        }

        if (resultado2.textContent.includes("*")) {
            resultado2.textContent = resultado2.textContent.split("*")[0] + " * "
            operacion = "*"
        }

        if (resultado2.textContent.includes("/")) {
            resultado2.textContent = resultado2.textContent.split("/")[0] + " / "
            operacion = "/"
        }

        if (resultado2.textContent.includes("%")) {
            resultado2.textContent = resultado2.textContent.split("%")[0] + " % "
            operacion = "%"
        }

        if (resultado2.textContent.includes("^")) {
            resultado2.textContent = resultado2.textContent.split("^")[0] + " ^ "
            operacion = "**"
        }
        resultado.textContent = ""
    };



    function resetear() {
        resultado.textContent = ""
        resultado2.textContent = ""
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

            case "**":
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

            case "pi":
                res = parseFloat(operando1) * (3.14159265358979323846)
                break;

            //FALTA CORREGIR ESTE CASE DEL SIGNO CONTRARIO +-

            case "sign":
                console.log(operando1)
                console.log(parseFloat(operando1))
                res = parseFloat(operando1) * -1
        }

        resetear()
        resultado.textContent = res
    };

};