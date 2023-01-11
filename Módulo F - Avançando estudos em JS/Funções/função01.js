// Funções são ações executadas assim que são chamadas ou em decorrência de algum evento.

// Uma função pode receber parâmetros e retornar um resultado.

function parimpar(n){
    if(n % 2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

console.log(parimpar(7))