// Condições aninhadas são condições que não possui apenas duas opções(true, false). Ela tem condições dentro de condições

/* Teste de idade para voto
var idade = 25

if(idade < 16){
    console.log('Não vota')
} else{
    if(idade < 18){
        console.log('Voto opcional')
    } else if (idade <= 65) {
        console.log('Voto obrigatório')
    } else {
        console.log('Idade limite')
    }
}
*/

var agora = new Date()
var hora = agora.getHours()

if (hora < 5){
    console.log(`Olá!! Agora são exatamente ${hora}hrs da madrugada. Vai dormir cara.`)
} else if (hora < 12){
    console.log(` Bom dia!! Agora são exatamente ${hora}hrs da manhã.`)
} else if (hora <= 18){
    console.log(`Bom tarde!! Agora são exatamente ${hora}hrs da tarde.`)
} else {
    console.log(`Bom noite!! Agora são exatamente ${hora}hrs da noite.`)
}