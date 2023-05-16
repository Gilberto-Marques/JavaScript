function soma(n1, n2) {
    return n1 + n2
}

/*
console.log(soma(2));
não definir os parametros, ele retornara NaN(não é um número)
mas na função se eu colocar entre as entrada de parametros ex: n=0, e 
não passar o valor do outro parâmetro, ele vai ter um valor 0 de entrada
e não vai me retornar Undefined e sim, nesse caso, somar um dos parametros
de entrada com o 0
*/

console.log(soma(2,3));