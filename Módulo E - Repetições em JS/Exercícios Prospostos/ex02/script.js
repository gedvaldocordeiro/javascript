function multiplicador(){
    var tabua = parseInt(window.document.getElementById('tabua').value)
    var d2 = window.document.getElementById('d2')
    var resp = ''

    for(var cont = 1; cont <= 10; cont++){
        resp = tabua * cont
        d2.innerText = `${tabua} x ${cont} = ${resp}`
    }
}