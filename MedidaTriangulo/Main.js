const triangulo = require('./triangulo');
const entrada = require('readline-sync');

let a = parseFloat(entrada.question("Lado a: "));
let b = parseFloat(entrada.question("Lado b: "));
let c = parseFloat(entrada.question("Lado c: "));

console.log(triangulo(a, b, c));