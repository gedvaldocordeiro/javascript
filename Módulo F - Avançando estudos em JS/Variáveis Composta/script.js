// Array ou vetor é composto por um elemento, que é composto por um par que armazena o valor colocado dentro dele e um índice

//Declarando variável composta
let num = [7, 6, 5]

//Atribuindo mais valores a variável
num[3] = 9

//Método para incluir mais uma valor na variável sem se preocupar com o índice
num.push(1)

//Atributo para saber o comprimento do vetor
num.length

//Método para colocar a valores do vetor em ordem crescente
num.sort()
/*
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
 

//Como mostrar os valores do vetor sem a formatação
for (let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}

//Forma mais simples
for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}.`)
}*/

//Como buscar um valor dentro de um vetor

//num.indexOf(valor desejado)

//Quando o retorno for -1 é porque o valor não exite no vetor
console.log(num)
let od = num.indexOf(9)
if(od == -1){
    console.log('O valor não foi encontrado.')
}else{
    console.log(`O valor 6 está na posição ${od}.`)
}