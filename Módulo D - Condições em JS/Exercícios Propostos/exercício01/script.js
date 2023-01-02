function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Olá, bom dia!! <br/> Agora são ${hora} horas.`

    if (hora >= 0 && hora < 6){
        //Madrugada
        img.src = 'imagens/madrugada.png'
        msg.innerHTML = `Vai dormir bicho. <br/> Agora são exatamente ${hora}:${min} da madrugada.`
        //document.body.style.background = '#'
    } else if (hora >= 6 && hora < 12){
        //Manhã
        img.src = 'imagens/manha.png'
        msg.innerHTML = `Olá, bom dia!! <br/> Agora são exatamente ${hora}:${min} da manhã.`
        //document.body.style.background = '#'
    } else if (hora >= 12 && hora < 18){
        //Tarde
        img.src = 'imagens/tarde.png'
        msg.innerHTML = `Olá, boa tarde!! <br/> Agora são exatamente ${hora}:${min} da tarde.`
        //document.body.style.background = '#'
    } else{
        //Noite
        img.src = 'imagens/noite.png'
        msg.innerHTML = `Olá, boa noite!! <br/> Agora são exatamente ${hora}:${min} da noite.`
        //document.body.style.background = '#'
    }
}
