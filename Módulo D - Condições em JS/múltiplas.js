/* As condições múltiplas possui uma expressão com vários case de valores. Condições múltiplas é utilizada na sua maioria para valores exatos, pontuais
O comando Break é obrigatório, para que termine a condição */

/*
Domingo = 0
Segunda = 1
Terça = 2
Quarta = 3
Quinta = 4
Sexta = 5
Sábado = 6
*/

var agora = new Date()
var dia = agora.getDay()

switch(dia) {
    case 0:
        console.log('Domingo')
        break
    case 1: 
        console.log('Segunda')
        break
    case 2: 
        console.log('Terça')
        break
    case 3: 
        console.log('Quarta')
        break
    case 4: 
        console.log('Quinta')
        break
    case 5: 
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('Dia inválido')
        break
}