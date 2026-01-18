const clippyText = document.getElementById("clippy-text");

// Cambia el texto aquí
const mensajes = [
    "¡Hola! Parece que necesitas ayuda.",
    "¿Quieres aprender a usar GitHub Pages?",
    "No olvides guardar tu trabajo.",
    "¡Clippy te anima a seguir adelante!"
];

let index = 0;

function mostrarMensaje() {
    clippyText.innerText = mensajes[index];
    clippyText.style.display = "block";

    setTimeout(() => {
        clippyText.style.display = "none";
        index = (index + 1) % mensajes.length;
    }, 3000); // cada mensaje dura 3 segundos
}

// Cada 4 segundos muestra un mensaje
setInterval(mostrarMensaje, 4000);
