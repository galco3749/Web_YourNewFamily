// Número de la diapositiva visible. Empieza en 1 (la primera).
let diapositivaActual = 1;
mostrarDiapositiva(diapositivaActual);

// Se llama al pulsar "anterior" (-1) o "siguiente" (+1).
function cambiarDiapositiva(direccion) {
    diapositivaActual = diapositivaActual + direccion;
    mostrarDiapositiva(diapositivaActual);
}

// Se llama al pulsar uno de los puntos. Salta directamente a esa diapositiva.
function irADiapositiva(numero) {
    diapositivaActual = numero;
    mostrarDiapositiva(diapositivaActual);
}

// Función principal: oculta todas las diapositivas y muestra solo la indicada.
// También actualiza qué punto aparece resaltado abajo.
function mostrarDiapositiva(numero) {
    let diapositivas = document.getElementsByClassName("mySlides");
    let puntos = document.getElementsByClassName("dot");

    // Si se pasa del final, vuelve al principio. Si va antes del inicio, salta al final.
    if (numero > diapositivas.length) {
        diapositivaActual = 1;
    }
    if (numero < 1) {
        diapositivaActual = diapositivas.length;
    }

    // Oculta todas las diapositivas y desactiva todos los puntos.
    for (let i = 0; i < diapositivas.length; i++) {
        diapositivas[i].style.display = "none";
    }
    for (let i = 0; i < puntos.length; i++) {
        puntos[i].className = puntos[i].className.replace(" active", "");
    }

    // Muestra la diapositiva actual y resalta su punto correspondiente.
    // Se usa -1 porque los arrays en JavaScript empiezan a contar desde 0.
    diapositivas[diapositivaActual - 1].style.display = "block";
    puntos[diapositivaActual - 1].className += " active";
}
