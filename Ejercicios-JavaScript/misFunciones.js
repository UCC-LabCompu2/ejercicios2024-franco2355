function cambia_unidades(valor, id) {
    if (isNaN(valor)) {
        alert("Se ingreso un valor invalido en " + id);
        document.getElementById("metro").value = "";
        document.getElementById("pulgada").value = "";
        document.getElementById("pie").value = "";
        document.getElementById("yarda").value = "";
        return;
    }

    valor = parseFloat(valor);

    var metro, pulgada, pie, yarda;

    if (id === "metro") {
        metro = valor;
        pulgada = valor * 39.3701;
        pie = valor * 3.28084;
        yarda = valor * 1.09361;
    } else if (id === "pulgada") {
        metro = valor * 0.0254;
        pulgada = valor;
        pie = valor * 0.0833333;
        yarda = valor * 0.0277778;
    } else if (id === "pie") {
        metro = valor * 0.3048;
        pulgada = valor * 12;
        pie = valor;
        yarda = valor * 0.333333;
    } else if (id === "yarda") {
        metro = valor * 0.9144;
        pulgada = valor * 36;
        pie = valor * 3;
        yarda = valor;
    } else {
        return;
    }

    document.getElementById("metro").value = metro.toFixed(4);
    document.getElementById("pulgada").value = pulgada.toFixed(4);
    document.getElementById("pie").value = pie.toFixed(4);
    document.getElementById("yarda").value = yarda.toFixed(4);
}


function guardarLocalStorage() {
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('2_web.html');
}

function cargarLocalStorage() {
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;
}



function convertirGR(id) {
    var valor, resultado;

    if (id === "grados") {
        valor = parseFloat(document.getElementById("grados").value);
        resultado = valor * Math.PI / 180;
    } else if (id === "radianes") {
        valor = parseFloat(document.getElementById("radianes").value);
        resultado = valor * 180 / Math.PI;
    } else {
        throw new Error("Identificador no válido");
    }

    document.getElementById(id === "grados" ? "radianes" : "grados").value = resultado.toFixed(4);
}

function mostrar_ocultar (valorMO){
    if (valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    } else if (valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display='none';
    }
}


function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(x = 0 + margen, y = yMax - 40 - margen, w = 40, h = 40);
    ctx.arc(x = xMax / 2, y = yMax / 2, radius = 20, startAngle = 0, endAngle = 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#333899";
    ctx.fill();
}




function calcularSuma() {
    var num1 = Number(document.getElementById("sum_num1").value);
    var num2 = Number(document.getElementById("sum_num2").value);
    var total = num1 + num2;
    document.getElementById("sum_total").innerHTML = total;
}

function calcularResta() {
    var num1 = Number(document.getElementById("res_num1").value);
    var num2 = Number(document.getElementById("res_num2").value);
    var total = num1 - num2;
    document.getElementById("res_total").innerHTML = total;
}

function calcularMultiplicacion() {
    var num1 = Number(document.getElementById("mul_num1").value);
    var num2 = Number(document.getElementById("mul_num2").value);
    var total = num1 * num2;
    document.getElementById("mul_total").innerHTML = total;
}

function calcularDivision() {
    var num1 = Number(document.getElementById("div_num1").value);
    var num2 = Number(document.getElementById("div_num2").value);
    var total = num1 / num2;
    document.getElementById("div_total").innerHTML = total;
}







function cargarWeb() {
  var cant, unidad, urlComp;

  cant = document.getElementById("distancia").value;
  unidad = document.getElementsByName("unidades")[0].value;

  urlComp = "segundaweb.html#" + cant + "#" + unidad;
  window.open(urlComp);
}

function cargarResultado() {
  var urlComp, can, un;

  urlComp = window.location.href.split("/")[5];
  can = urlComp.split("#")[1];
  un = urlComp.split("#")[2];

  document.getElementById("dist").value = can + " " + un;
}
