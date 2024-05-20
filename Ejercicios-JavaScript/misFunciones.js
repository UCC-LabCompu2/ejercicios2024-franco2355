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
