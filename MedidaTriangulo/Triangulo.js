function triangulo(a, b, c) {
    if (a >= b + c || b >= a + c || c >= a + b) {
        return "Não pode ser considerado um triângulo" // a soma de dois lados não pode ser menor que o lado oposto
    }
    if (a == b && b == c) {
        return "Triângulo equilátero"    // possui os 3 lados iguais
    }
    if (a != b && b != c && a != c) {
        return "Triângulo escaleno"     // possui os 3 lados diferentes
    }
    if (a == b || b == c || a == c) {
        return "Triângulo isósceles"    // possui 2 lados iguais
    }
}

module.exports = triangulo;