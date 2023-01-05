function calcidade() {
    //Idade
    var atual = new Date().getFullYear()
    var nasc = window.document.getElementById('nasc')
    var idade = Number(atual) - Number(nasc.value)
    var msg = window.document.querySelector('div#msg')

    if (nasc.value <= 1919 || nasc.value > atual){
        window.alert('Ano de nascimento inválido!')
    } else {
        //Foto
        var img = document.createElement('img')
        var sexo = window.document.getElementsByName('sexo')
        var gênero = ''
        if(sexo[0].checked){
            gênero = 'Homem'
            if (idade >= 1 && idade <= 3){
                //Bebê
                msg.innerText = `Detectamos um bebê de ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/bebe.jpg')
                msg.appendChild(img)
                msg.style.textAlign = 'center'
            } else if (idade >= 4 && idade <= 12){
                // Criança
                msg.innerText = `Detectamos um menino de ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/criança-mas.jpg')
                msg.appendChild(img)
                msg.style.textAlign = 'center'
            } else if (idade >= 13 && idade <= 24){
                //Jovem
                msg.innerText = `Detectamos um jovem rapaz de ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/jovem-mas.jpg')
                msg.appendChild(img)
                msg.style.textAlign = 'center'
            } else if (idade >= 25 && idade <= 60){
                //Adulto
                msg.innerText = `Detectamos um homem de ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/homem.jpg')
                msg.appendChild(img)
                msg.style.textAlign = 'center'
            } else{
                //Idoso
                msg.innerText = `Detectamos um idoso de ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/idoso-mas.jpg')
                msg.appendChild(img)
                msg.style.textAlign = 'center'
            }
        } else{
            gênero = 'Mulher'
            if (idade >= 1 && idade <= 3){
                //Bebê
                msg.innerText = `Detectamos um bebê de ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/bebe.jpg')
                msg.appendChild(img)
                msg.style.textAlign = 'center'
            } else if (idade >= 4 && idade <= 12){
                // Criança
                msg.innerText = `Detectamos uma menina de ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/criança-fem.jpg')
                msg.appendChild(img)
                msg.style.textAlign = 'center'
            } else if (idade >= 13 && idade <= 24){
                //Jovem
                msg.innerText = `Detectamos uma moça de ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/jovem-fem.jpg')
                msg.appendChild(img)
                msg.style.textAlign = 'center'
            } else if (idade >= 25 && idade <= 60){
                //Adulto
                msg.innerText = `Detectamos uma mulher de ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/mulher.jpg')
                msg.appendChild(img)
                msg.style.textAlign = 'center'
            } else{
                //Idosa
                msg.innerText = `Detectamos uma idosa de ${idade} anos de idade.`
                img.setAttribute('src', 'imagens/idosa-fem.jpg')
                msg.appendChild(img)
                msg.style.textAlign = 'center'
            }
        }
    }

    
}   