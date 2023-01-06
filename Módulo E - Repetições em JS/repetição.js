// Laço de repetição no começo. A função irá se repetir enquanto (while) a condição for verdadeira. Veja o exemplo abaixo:

var cont = 1
while (cont <= 5) {
    console.log(`Contador ${cont}`)
    cont++
}

//Laço de repetição no final. A função será executada e depois irá verificar a condição. Faça (do)

var veri = 2
do {
    console.log(`Verificador ${veri}`)
    veri = veri + 2
} while (veri <= 10)

// Estrutura de repetição com variável de controle. Inicio, teste e incremento.

for (var c = 1; c <= 10; c++){
    console.log(`Teste ${c}`)
}