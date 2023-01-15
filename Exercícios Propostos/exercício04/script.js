function multiplicador(){
    /* Converter em número mais fácil
    var tabua = parseInt(window.document.getElementById('tabua').value)
    */
    let tabua = window.document.getElementById('tabua')
    let d2 = window.document.getElementById('d2')

    if(tabua.value.length == 0){
        window.alert('Digite um número')
    }else{
        let vt = Number(tabua.value)
        d2.innerHTML = `Tabuada do ${vt}. <br/> <br/>`

        for(var vm = 1; vm <= 10; vm++){
            d2.innerHTML += `${vt} x ${vm} = ${vm*vt} <br/>`
        }
    }

    
}