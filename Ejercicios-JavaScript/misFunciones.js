/**
 * Convierte unidades de medida (metro, pulgada, pie, yarda) según el nombre dado y actualiza los valores en el formulario.
 */
let cambiarUnidades = (nombre, valor) => {
    let valMetro, valPulgada, valPie, valYarda;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }

    if (isNaN(valor)) {
        alert("El valor ingresado no es un número!");
        valMetro = "";
        valPulgada = "";
        valPie = "";
        valYarda = "";
    } else {
        if (nombre === "metro") {
            valMetro = valor;
            valPulgada = valor * 39.3701;
            valPie = valor * 3.28084;
            valYarda = valor * 1.093;
        } else if (nombre === "pulgada") {
            valMetro = valor * 0.0254;
            valPulgada = valor;
            valPie = valor * 0.08333;
            valYarda = valor * 0.02777;
        } else if (nombre === "pie") {
            valMetro = valor * 0.3048;
            valPulgada = valor * 12;
            valPie = valor;
            valYarda = valor * 0.33333;
        } else if (nombre === "yarda") {
            valMetro = valor * 0.9144;
            valPulgada = valor * 36;
            valPie = valor * 3;
            valYarda = valor;
        }
    }

    document.getElementById('metro').value = Math.round(valMetro * 100) / 100;
    document.getElementById('pulgada').value = Math.round(valPulgada * 100) / 100;
    document.getElementById('pie').value = Math.round(valPie * 100) / 100;
    document.getElementById('yarda').value = Math.round(valYarda * 100) / 100;
};

/**
 * Guarda la distancia y unidad seleccionadas en el LocalStorage y abre una nueva página.
 */
function guardarLocalStorage() {
    let distancia, unidad;
    distancia = document.getElementById('distancia').value;
    unidad = document.getElementsByName('unidades')[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('2_web.html');
}

/**
 * Carga la distancia y unidad desde el LocalStorage y las muestra en un campo del formulario.
 */
function cargarLocalStorage() {
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;
}

/**
 * Convierte entre grados y radianes según el id dado y actualiza el valor convertido en el formulario.
 */
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

/**
 * Muestra u oculta un div según el valor pasado.
 */
function mostrar_ocultar(valorMO) {
    if (valorMO == "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    } else if (valorMO == "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}

/**
 * Dibuja un cuadrado y un círculo en un elemento canvas.
 */
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

/**
 * Calcula la suma de dos números ingresados y muestra el resultado.
 */
function calcularSuma() {
    var num1 = Number(document.getElementById("sum_num1").value);
    var num2 = Number(document.getElementById("sum_num2").value);
    var total = num1 + num2;
    document.getElementById("sum_total").innerHTML = total;
}

/**
 * Calcula la resta de dos números ingresados y muestra el resultado.
 */
function calcularResta() {
    var num1 = Number(document.getElementById("res_num1").value);
    var num2 = Number(document.getElementById("res_num2").value);
    var total = num1 - num2;
    document.getElementById("res_total").innerHTML = total;
}

/**
 * Calcula la multiplicación de dos números ingresados y muestra el resultado.
 */
function calcularMultiplicacion() {
    var num1 = Number(document.getElementById("mul_num1").value);
    var num2 = Number(document.getElementById("mul_num2").value);
    var total = num1 * num2;
    document.getElementById("mul_total").innerHTML = total;
}

/**
 * Calcula la división de dos números ingresados y muestra el resultado.
 */
function calcularDivision() {
    var num1 = Number(document.getElementById("div_num1").value);
    var num2 = Number(document.getElementById("div_num2").value);
    var total = num1 / num2;
    document.getElementById("div_total").innerHTML = total;
}

/**
 * Construye una URL con la distancia y unidad ingresadas y abre una nueva página con esa URL.
 */
function cargarWeb() {
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaweb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

/**
 * Obtiene la distancia y unidad desde la URL de la página actual y las muestra en un campo del formulario.
 */
function cargarResultado() {
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];
    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}

/**
 * Dibuja un cuadrado y un círculo en un elemento canvas.
 */
function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;

    ctx.fillStyle = "#333899";
    ctx.fillRect(0 + margen, yMax - 40 - margen, 40, 40);

    ctx.beginPath();
    ctx.arc(xMax / 2, yMax / 2, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#8b4c99";
    ctx.fill();
}

/**
 * Dibuja en el canvas según la posición del evento de mouse.
 */
var bandera = false;
function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX - canvas.offsetLeft;
    var posY = event.clientY - canvas.offsetTop;
    console.log(posX, posY);

    canvas.onmousedown = function () { bandera = true; };
    canvas.onmouseup = function () { bandera = false; };

    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
    }
}

/**
 * Limpia el canvas.
 */
function limpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Dibuja un cuadrado de línea en el canvas.
 */
let dibujarCuadriculado = () => {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    xmax = canvas.width;
    ymax = canvas.height;
    paso = 40;

    ctx.strokeStyle = "#bbb9b9";
    for (let i = paso; i < ymax; i += paso) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(xmax, i);
        ctx.stroke();
        ctx.closePath();
    }

    for (let i = paso; i < xmax; i += paso) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, ymax);
        ctx.stroke();
        ctx.closePath();
    }

    ctx.beginPath();
    ctx.moveTo(0, ymax / 2);
    ctx.lineTo(xmax, ymax / 2);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(xmax / 2, 0);
    ctx.lineTo(xmax / 2, ymax);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    let numx = -Math.floor(xmax / 40 / 2);
    ctx.font = "10pt Verdana";
    ctx.fillStyle = "blue";
    for (let i = 0; i < xmax; i += 40) {
        ctx.fillText(String(numx), i, ymax / 2 + 15);
        numx++;
    }

    let numy = -Math.floor(ymax / 40 / 2);
    for (let i = 0; i < ymax; i += 40) {
        ctx.fillText(String(numy), xmax / 2 + 5, i + 15);
        numy++;
    }
};

/**
 * Dibuja una imagen en el canvas en una posición específica.
 */
function dibujarImagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    console.log(posX, posY);
    var img = new Image();
    img.src = "images/auto.png";
    canvas.width = canvas.width;
    img.onload = function() {
        ctx.drawImage(img, posX, posY);
    };
}

/**
 * Dibuja una imagen en el canvas en una posición específica con validación.
 */
let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    console.log(posX, posY);
    const img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function() {
        const width = this.naturalWidth;
        const height = this.naturalHeight;
        console.log(width, height);

        if (posY < 0 || posX < 0) {
            openDialog();
        } else if (canvas.width - width < posX || canvas.height - height < posY) {
            openDialog();
        } else {
            ctx.drawImage(img, posX, posY);
        }
    };
};

/**
 * Abre un diálogo modal.
 */
let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
};

/**
 * Cierra un diálogo modal.
 */
let closeDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
};

/**
 * Anima un auto moviéndolo en el canvas.
 */
let animarAuto = () => {
    x = 0;
    dx = 2;
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = "images/auto.png";

    img.onload = function() {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    };

    if (x > canvas.width) {
        x = 0;
    }
    x += dx;
};

var intervalId;
/**
 * Detiene la animación del auto.
 */
let detenerAuto = () => {
    console.log("Se detuvo el auto");
    clearInterval(intervalId);
};

/**
 * Comienza la animación del auto.
 */
let comenzarAnimacion = () => {
    console.log("Se llamo a comenzar animacion");
    intervalId = setInterval(animarAuto, 10);
    setTimeout(detenerAuto, 4000);
};

/**
 * Anima un nuevo auto 
 */
let animarNuevo = () => {
    setTimeout(cancelarAnimacion, 4000);
    requestAnimationFrame(animarAuto);
};

/**
 * Cancela la animación del auto.
 */
let cancelarAnimacion = () => {
    cancelAnimationFrame(animationId);
};
