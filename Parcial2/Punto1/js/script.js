let figurita1 = document.getElementById('figurita1');
let isometrico1 = figurita1.getContext('2d');

let figurita2 = document.getElementById('figurita2');
let isometrico2 = figurita2.getContext('2d');

let figurita3 = document.getElementById('figurita3');
let isometrico3 = figurita3.getContext('2d');

let figurita4 = document.getElementById('figurita4');
let isometrico4 = figurita4.getContext('2d');


function dibujarFiguraRellena(lienzo, puntos, colorRelleno) {
    lienzo.beginPath();
    lienzo.moveTo(puntos[0][0], puntos[0][1]);

    for (let i = 1; i < puntos.length; i++) {
        lienzo.lineTo(puntos[i][0], puntos[i][1]);
    }

    lienzo.closePath();

    // Relleno
    lienzo.fillStyle = colorRelleno;
    lienzo.fill();

    // Bordes
    lienzo.strokeStyle = "black";
    lienzo.stroke();
}


// Figurita 1

// Cara superior
dibujarFiguraRellena(isometrico1, [
    [0, 90],
    [100, 150],
    [250, 60],
    [150, 0]
], "#e9e500");

// Cara izquierda
dibujarFiguraRellena(isometrico1, [
    [0, 270],
    [0, 90],
    [100, 150],
    [100, 210],
    [200, 390]
], "#e9e500");

// Cara frontal derecha superior
dibujarFiguraRellena(isometrico1, [
    [100, 150],
    [100, 210],
    [250, 120],
    [250, 60],
], "#e9e500")

// Cara derecha
dibujarFiguraRellena(isometrico1, [
    [100, 210],
    [250, 120],
    [350, 300],
    [200, 390]
], "#e9e500");

// Cara frontal izquierda inferior
dibujarFiguraRellena(isometrico1, [
    [200, 450],
    [200, 390],
    [0, 270],
    [0, 330]
], "#e9e500");

// Cara frontal derecha inferior
dibujarFiguraRellena(isometrico1, [
    [200, 450],
    [350, 360],
    [350, 300],
    [200, 390]
], "#e9e500");


// Figurita 2

// Cara frontal izquierda
dibujarFiguraRellena(isometrico2, [
    [100, 420],
    [0, 360],
    [0, 240],
    [100, 300]
], "#3939fa");

// Primer escalon plano
dibujarFiguraRellena(isometrico2, [
    [0, 240],
    [75, 195],
    [175, 255],
    [100, 300]
], "#3939fa");

// Primer escalon vertical
dibujarFiguraRellena(isometrico2, [
    [175, 255],
    [75, 195],
    [75, 135],
    [175, 195]
], "#3939fa");

// Segundo escalon plano
dibujarFiguraRellena(isometrico2, [
    [175, 195],
    [75, 135],
    [134, 100],
    [234, 160]
], "#3939fa");

// Segundo escalon vertical
dibujarFiguraRellena(isometrico2, [
    [234, 160],
    [134, 100],
    [134, 40],
    [234, 100]
], "#3939fa");

// Tercer escalon plano 
dibujarFiguraRellena(isometrico2, [
    [234, 100],
    [134, 40],
    [200, 0],
    [300, 60]
], "#3939fa");


// Cara lateral izquierda
dibujarFiguraRellena(isometrico2, [
    [100, 300],
    [175, 255],
    [175, 195],
    [234, 160],
    [234, 100],
    [300, 60],
    [300, 300],
    [100, 420]
], "#3939fa");


// Figurita 3

// Cara izquierda
dibujarFiguraRellena(isometrico3, [
    [200, 510],
    [0, 390],
    [0, 90],
    [50, 120],
    [50, 240],
    [200, 330],
], "#570a0a")

// Cara derecha inferior
dibujarFiguraRellena(isometrico3, [
    [200, 510],
    [200, 420],
    [350, 390],
    [350, 420]
], "#570a0a")

// Cara derecha de enmedio
dibujarFiguraRellena(isometrico3, [
    [200, 420],
    [200, 330],
    [400, 300],
    [400, 390]
], "#570a0a")

// Cara plana de enmedio
dibujarFiguraRellena(isometrico3, [
    [200, 330],
    [50, 240],
    [100, 210],
    [150, 240],
    [250, 180],
    [400, 300],
], "#570a0a")

// Cara derecha de arriba pequeña
dibujarFiguraRellena(isometrico3, [
    [50, 240],
    [50, 120],
    [100, 90],
    [100, 210]
], "#570a0a")

// Cara izquierda de arriba pequeña
dibujarFiguraRellena(isometrico3, [
    [100, 210],
    [100, 90],
    [150, 120],
    [150, 240]
], "#570a0a")

// Cara derecha de arriba grande
dibujarFiguraRellena(isometrico3,[
    [150, 240],
    [150, 120],
    [250, 60],
    [250, 180],
], "#570a0a")

// Cara superior
dibujarFiguraRellena(isometrico3,[
    [50, 120],
    [100, 90],
    [150, 120],
    [250, 60],
    [150, 0],
    [0, 90],
], "#570a0a")


// Figurita 4

// Cara derecha
dibujarFiguraRellena(isometrico4, [
    [150, 330],
    [350, 210],
    [350, 90],
    [300, 120]
], "#00e0fe")

// Cara frontal
dibujarFiguraRellena(isometrico4, [
    [150, 330],
    [0, 240],
    [150, 30],
    [200, 60],
    [160, 120],
    [210, 150],
    [250, 90],
    [300, 120]
], "#00e0fe")

// Cara superior derecha
dibujarFiguraRellena(isometrico4, [
    [300, 120],
    [350, 90],
    [300, 60],
    [250, 90]
], "#00e0fe")

// Cara superior izquierda
dibujarFiguraRellena(isometrico4, [
    [200, 60],
    [250, 30],
    [200, 0],
    [150, 30]
], "#00e0fe")

// Cara plana en medio
dibujarFiguraRellena(isometrico4, [
    [250, 90],
    [210, 150],
    [160, 120]
], "#00e0fe")

// Cara lateral derecha
dibujarFiguraRellena(isometrico4, [
    [250, 90],
    [160, 120],
    [200, 60],
    [250, 30]
], "#00e0fe")