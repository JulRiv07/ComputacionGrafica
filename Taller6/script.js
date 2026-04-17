// 1. Número perfecto
function esPerfecto(n) {
    let suma = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) suma += i;
    }
    return suma === n;
}

// 2. Cuadrados o cubos
function cuadradosOCubos(n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        res.push(n % 2 === 0 ? i*i : i*i*i);
    }
    return res.join(", ");
}

// 3. Invertir número
function invertirNumero(n) {
    let inv = 0;
    while (n > 0) {
        inv = inv * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return inv;
}

// 4. Palíndromo
function esPalindromo(n) {
    return n === invertirNumero(n);
}

// 5. Contar dígito
function contarDigito(n, d) {
    let c = 0;
    while (n > 0) {
        if (n % 10 === d) c++;
        n = Math.floor(n / 10);
    }
    return c;
}

// 6. Decimal a binario
function decimalABinario(n) {
    let bin = "";
    while (n > 0) {
        bin = (n % 2) + bin;
        n = Math.floor(n / 2);
    }
    return bin || "0";
}

// 7. Primo
function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Funciones UI

// Obtener número con validación
function getNumero() {
    let valor = document.getElementById("numero").value;

    if (valor === "") {
        mostrar("Ingresa un número primero");
        return null;
    }

    return parseInt(valor);
}

// Mostrar resultado
function mostrar(res) {
    document.getElementById("resultado").innerText = res;
}

// Botones

function perfecto() {
    let n = getNumero();
    if (n === null) return;

    mostrar(esPerfecto(n) ? "Es perfecto" : " No es perfecto");
}

function cuadradosCubos() {
    let n = getNumero();
    if (n === null) return;

    mostrar(cuadradosOCubos(n));
}

function invertir() {
    let n = getNumero();
    if (n === null) return;

    mostrar("Invertido: " + invertirNumero(n));
}

function palindromo() {
    let n = getNumero();
    if (n === null) return;

    mostrar(esPalindromo(n) ? "Es palíndromo" : "No es palíndromo");
}

function contar() {
    let n = getNumero();
    if (n === null) return;

    let d = document.getElementById("digito").value;

    if (d === "") {
        mostrar("Ingresa el dígito a buscar");
        return;
    }

    mostrar("Aparece: " + contarDigito(n, parseInt(d)) + " veces");
}

function binario() {
    let n = getNumero();
    if (n === null) return;

    mostrar("Binario: " + decimalABinario(n));
}

function tipo() {
    let n = getNumero();
    if (n === null) return;

    let res = "";

    if (esPrimo(n)) res += "PRIMO ";
    res += (n % 2 === 0) ? "PAR" : "IMPAR";

    mostrar(res);
}