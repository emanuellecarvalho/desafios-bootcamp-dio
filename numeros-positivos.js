/* 
Desafio
Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos. 
Em seguida, apresente a quantidade de valores positivos digitados.

Entrada
Você receberá seis valores, negativos e/ou positivos.

Saída
Exiba uma mensagem dizendo quantos valores positivos foram lidos. 
assim como é exibido abaixo no exemplo de saída. 
Não se esqueça de incluir na mensagem de saída o sufixo " valores positivos".
*/

let N1 = parseFloat( gets());
let N2 = parseFloat( gets());
let N3 = parseFloat( gets());
let N4 = parseFloat( gets());
let N5 = parseFloat( gets());
let N6 = parseFloat( gets());

let total = 0;

if (N1 > 0){
  total = total + 1;
}

if (N2 > 0){
  total = total + 1;
}

if (N3 > 0){
  total = total + 1;
}

if (N4 > 0){
  total = total + 1;
}

if (N5 > 0){
  total = total + 1;
}

if (N6 > 0){
  total = total + 1;
}

console.log(total + " valores positivos ");

