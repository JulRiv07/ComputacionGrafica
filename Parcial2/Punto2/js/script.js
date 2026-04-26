const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo( 50 , 50);
ctx.lineTo( 50 , 350);
ctx.lineTo( 550 , 350);
ctx.stroke();



ctx.translate( 50 , 350);
ctx.beginPath();
ctx.moveTo( 0 , 0);

let heightProportion = 300/100;
let widthProportion = 500/167;

function drawLine( x , y ) {

    ctx.lineTo( x*widthProportion , -y*heightProportion);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo( x*widthProportion , -y*heightProportion);


}

const button = document.getElementById('Graficar');

button.addEventListener('click' , () => {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);
    if ( x >= 1 && x <= 166 && y >= 1 && y <= 99 ) {
        drawLine(x, y);
    } else {
        alert('Valores fuera de rango. X debe estar entre 1 y 166, Y debe estar entre 1 y 99.');
    }
});

const ClearButton = document.getElementById('Limpiar');

ClearButton.addEventListener('click' , () => {
    ctx.fillStyle = 'white';
    ctx.fillRect( 0 , -300 , 500 , 300);
    ctx.beginPath();
    ctx.moveTo(0, 0);
});
