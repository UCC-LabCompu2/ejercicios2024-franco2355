function cambia_unidades(valor, id) {
    if (isNaN(valor)) {
        alert("Se ingresó un valor inválido " + id);
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }

    if (id === "metro") {
        document.lasUnidades.unid_pulgada.value = 39.3701 * valor;
        document.lasUnidades.unid_pie.value = 3.28084 * valor;
        document.lasUnidades.unid_yarda.value = 1.09361 * valor;
    } else if (id === "pulgada") {
        document.lasUnidades.unid_metro.value = 0.0254 * valor;
        document.lasUnidades.unid_pie.value = 0.0833333 * valor;
        document.lasUnidades.unid_yarda.value = 0.0277778 * valor;
    } else if (id === "yarda") {
        document.lasUnidades.unid_metro.value = 0.9144 * valor;
        document.lasUnidades.unid_pulgada.value = 36 * valor;
        document.lasUnidades.unid_pie.value = 3 * valor;
    }
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
