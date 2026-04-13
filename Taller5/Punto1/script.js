let interfaz = document.getElementById('circulos');
let lienzo = interfaz.getContext('2d');

// Obtener el ancho y alto del canvas
let w = interfaz.width;
let h = interfaz.height;

/**
 * @param {number} x - Posición horizontal del centro del círculo
 * @param {number} y - Posición vertical del centro del círculo
 * @param {number} radius - Radio del círculo
 * @param {string} color - Color del borde del círculo
 */
function DibujarCirculo(x, y, radius, color){
    lienzo.beginPath(); // Inicia un nuevo trazo

    // Dibuja el arco completo
    lienzo.arc(x, y, radius, 0, Math.PI * 2);

    // Configuración del borde
    lienzo.lineWidth = 1;
    lienzo.strokeStyle = color;

    // Dibuja el borde del círculo
    lienzo.stroke();

    lienzo.closePath();
}

// Se toma el menor valor entre ancho y alto para que siempre quepa
let radius = Math.min(w, h) / 3.1;

console.log("hola");
console.log(w); // ancho del canvas
console.log(h); // alto del canvas

// Círculo inferior centrado
DibujarCirculo(w / 2, h - radius, radius, '#b8436b');

// Círculo superior izquierdo
DibujarCirculo(radius, radius, radius, '#418143');

// Círculo superior derecho
DibujarCirculo(w - radius, radius, radius, '#5e36b2');