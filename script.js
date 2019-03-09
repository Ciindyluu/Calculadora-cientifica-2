var operando1
var operando2
var operacion

function init() {
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");

    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var division = document.getElementById("division");
    var residuo = document.getElementById("residuo");
    var exponencial = document.getElementById("exponencial");
    var igual = document.getElementById("igual");

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

    suma.onclick = function (e) {
        resultado2.textContent = resultado2.textContent + " + "
    }

    resta.onclick = function (e) {
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


    //OPERACIONES

    reset.onclick = function (e) {
        resetear()
    };

    suma.onclick = function (e) {
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
            resultado2.textContent= operando1 + " + "
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
        operando1 = resultado.textContent
        operacion = "-"
        limpiar()
        resultado2.textContent = resultado2.textContent + " - "
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
        }
    };

    multiplicacion.onclick = function (e) {
        operando1 = resultado.textContent
        operacion = "*"
        limpiar()
        resultado2.textContent = resultado2.textContent + " * "
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
        }
    };

    division.onclick = function (e) {
        operando1 = resultado.textContent
        operacion = "/"
        limpiar()
        resultado2.textContent = resultado2.textContent + " / "
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
        }
    };

    residuo.onclick = function (e) {
        operando1 = resultado.textContent
        operacion = "%"
        limpiar()
        resultado2.textContent = resultado2.textContent + " % "
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
        }
    };

    exponencial.onclick = function (e) {
        operando1 = resultado.textContent
        operacion = "**"
        limpiar()
        resultado2.textContent = resultado2.textContent + " ! "
        if (resultado2.textContent.includes("=")) {
            operando1 = resultado2.textContent.split('=')[1]
        }
    };

    igual.onclick = function (e) {
        operando2 = resultado.textContent
        resolver()
        resultado2.textContent = resultado2.textContent + " = " + resultado.innerHTML
    };


    //METODOS
    function limpiar() {
        resultado.textContent = " "

    };

    function resetear() {
        resultado.textContent = " "
        operando1 = 0
        operando2 = 0
        operacion = " "
    };

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
        }

        resetear()
        resultado.textContent = res
    };

};