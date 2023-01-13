function atualiza(){
    let txtentra = window.document.getElementById('txtentra')
    let entrada = Number(txtentra.value)
    let d2 = window.document.querySelector('div#d2')
    if (txtentra.value.length == 0){
        window.alert('Preencha todos dados!')
    } else{
        d2.innerHTML = `Valor ${entrada} adicionado.`
    }
}