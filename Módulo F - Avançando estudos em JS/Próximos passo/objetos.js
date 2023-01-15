//Declarando um vetor(array)
let num = [5, 6, 7]

/*No array estamos limitados á índice apenas numéricos, veja:*/
console.log(num[0])

//Declarando um objeto
let amigo = {nome: 'Augusto', sexo: 'M', peso: 71.5, 
    //Função dentro de uma variável
    engordar(p=0){
        this.peso += p
    }
}

/*Com objetos conseguimos declarar um nome ao índice assim facilitando a nossa localização, e também conseguimos declarar funções.*/
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}.`)