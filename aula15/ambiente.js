let num=[1,3,6]

console.log(`Nosso vetor é o ${num}`)
num[3] = 6 // adicionando um novo valor para o próximo índice manualmente
num.push(7)//inclui mais um valor para o próximo índice automaticamente
console.log(`Tamanho do array: ${num.length}`)
console.log(`Imprimir os valores do array em ordem crescente: ${num.sort()}`)

for(let pos=0; pos<num.length; pos++){
    console.log(`Valor da posicao ${pos}: ${num[pos]}`)
}
console.log('--------------------------');
for(let pos in num){
    console.log(`Valor da posicao ${pos}: ${num[pos]}`);
}
console.log('--------------------------');
console.log('Buscar valores em um vetor');
console.log(`Buscar o valor 6 no vetor: ${num.indexOf(6)}, retorna a posição no qual está o valor buscado`);
console.log(`Buscar um valor que não existe no vetor: ${num.indexOf(12)}, retorna a posição -1, quando não há o valor buscado`);
if(num.indexOf(6) == -1){
    console.log('O valor não foi encontrado!');
}else{
    console.log(`O valor encontrado está na posicao: ${num.indexOf(6)}`);
}