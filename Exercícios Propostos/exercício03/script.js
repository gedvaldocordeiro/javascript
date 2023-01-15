function contar(){
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var d2 = window.document.querySelector('div#d2')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Preencha todos os dados!')
    }else{
        var vi = Number(inicio.value)
        var vf = Number(fim.value)
        var vp = Number(passo.value)

        //Caso o passo for 0
        if (vp <= 0){
            vp = 1
        }

        if (vi < vf){
            //Contagem crescente
            for(var cont = vi; cont <= vf; cont += vp){
                d2.innerHTML += `${cont}, `
            }
        //Inicio maior do que o fim
        }else{
            //Contagem decrescente
            for(var cont = vi; cont >= vf; cont -= vp){
                d2.innerHTML += `${cont}, `
            }
        }
    }
}