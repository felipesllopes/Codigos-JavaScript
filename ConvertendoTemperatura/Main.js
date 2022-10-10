let Temperatura = require('./ConvertendoTemperatura');
var entrada = require('readline-sync');

var temperatura = new Temperatura();

let valor = parseFloat(entrada.question("Valor em Celsius: "));
console.log(temperatura.celsius(valor));

valor = parseFloat(entrada.question("Valor em Kelvin: "));
console.log(temperatura.kelvin(valor));

valor = parseFloat(entrada.question("Valor em Fahrenheit: "));
console.log(temperatura.fahrenheit(valor));