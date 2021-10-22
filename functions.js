// 1) faça uma função que some dois numeros
function somaValor(a, b) {
    return a + b;
}
console.log(somaValor(2,3));

// 2) faça uma função que divida dois numeros
function divideValor(c, d) {
    return c / d ;
}
console.log(divideValor(10,2));

/* 3) faça uma função que faça a média de 2 numeros,
usando as funções criadas anteriormente. */

function mediaValor(primeiroNumero, segundoNumero) {
    const resultadoSoma = somaValor(primeiroNumero, segundoNumero);
    
    return divideValor(resultadoSoma, 2);
}
console.log(mediaValor(2, 6));


function calcula (a, b, funcaoCalculo) {
    return funcaoCalculo(a, b);
}

console.log(calcula(4, 8, somaValor));