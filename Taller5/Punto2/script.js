let interfaz = document.getElementById('circulos');
let cuadro = interfaz.getContext('2d');

// Ajuste para mejorar la nitidez de líneas de 1px
cuadro.translate(0.5, 0.5);

// Obtener dimensiones enteras
let width = Math.floor(interfaz.width) - 1;
let height = Math.floor(interfaz.height) - 1;

/**
 * Función para dibujar una línea
 * @param {number} x1 - Coordenada inicial en X
 * @param {number} y1 - Coordenada inicial en Y
 * @param {number} x2 - Coordenada final en X
 * @param {number} y2 - Coordenada final en Y
 * @param {string} color - Color de la línea
 * @param {CanvasRenderingContext2D} lienzo
 * 
 */
function DrawLine(x1, y1, x2, y2, color, lienzo){
    lienzo.beginPath();

    // Configuración de la línea
    lienzo.lineWidth = 1;
    lienzo.strokeStyle = color;

    // Se redondean las coordenadas para evitar líneas borrosas
    lienzo.moveTo(Math.floor(x1), Math.floor(y1));
    lienzo.lineTo(Math.floor(x2), Math.floor(y2));

    // Dibujar la línea
    lienzo.stroke();

    lienzo.closePath();
}

/**
 * Genera un color aleatorio
 * @returns {string} Color en formato rgb
 */
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Línea inferior 
DrawLine(0, height, width, height, "red", cuadro);

// Líneas verticales
DrawLine(0, height * 1/4, 0, height * 3/4, randomColor(), cuadro);
DrawLine(width / 2, height / 2, width / 2, height, randomColor(), cuadro);
DrawLine(width, height * 1/4, width, height * 3/4, randomColor(), cuadro);

// Líneas diagonales inferiores
DrawLine(0, height * 3/4, width / 2, height, randomColor(), cuadro);
DrawLine(width / 2, height, width, height * 3/4, randomColor(), cuadro);

// Líneas diagonales centrales
DrawLine(0, height * 1/4, width / 2, height / 2, randomColor(), cuadro);
DrawLine(width / 2, height / 2, width, height * 1/4, randomColor(), cuadro);

// Líneas diagonales superiores
DrawLine(0, height * 1/4, width / 2, 0, randomColor(), cuadro);
DrawLine(width / 2, 0, width, height * 1/4, randomColor(), cuadro);

// Figura interna
DrawLine(75, height * 1/4, width / 2, 75 * 1/4, randomColor(), cuadro);
DrawLine(width / 2, 75 * 1/4, width - 75, height * 1/4, randomColor(), cuadro);
DrawLine(width - 75, height * 1/4, width / 2, height / 2 - 75 * 1/4, randomColor(), cuadro);
DrawLine(width / 2, height / 2 - 75 * 1/4, 75, height * 1/4, randomColor(), cuadro);

// Línea vertical central interna
DrawLine(width / 2, 75 * 1/4, width / 2, height / 2 - 75 * 1/4, randomColor(), cuadro);