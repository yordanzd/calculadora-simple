const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

let operacion = "";

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        manejarClic(boton);
    });
});

function manejarClic(boton) {
    const valor = boton.textContent;

    if (boton.classList.contains("limpiar")) {
        operacion = "";
    } else if (valor === "=") {
        calcular();
        return;
    } else {
        operacion += valor;
    }

    actualizarPantalla();
}

function calcular() {
    try {
        operacion = eval(operacion).toString();
    } catch (error) {
        operacion = "Error";
    }
    actualizarPantalla();
}

function actualizarPantalla() {
    pantalla.textContent = operacion || "0";
}