function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var d2 = window.document.querySelector('div#d2')
    /* */
    var vi = Number(inicio.value)
    var vf = Number(fim.value)
    var vp = Number(passo.value)

    while(vi <= vf){
        d2.innerText = `passo ${vi}`
        vi = vi + vp
    }
}