let num = window.document.getElementById('txtentra')
let lista = document.querySelector('select#flista')
let d2 = window.document.querySelector('div#d2')
let valores = []

function isNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function atualiza(){    
    if (isNum(num.value) && !inLista(num.value, valores)){
        //O sinal de exclamação(!) significa NÃO no JS
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        d2.innerHTML = ''
    } else{
        window.alert('O valor é invalido ou já se encontra na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    let total = valores.length
    if(valores.length == 0){
        window.alert('Adicione valores para finalizar.')
    }else if(total == 1){
        d2.innerHTML = ''
        d2.innerHTML += `<br/><p>Ao todo, ${total} valor foi adicionado.</p>`
    }else{
        d2.innerHTML += `<br/><p>Ao todo, ${total} valores foram adicionados.</p>`
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        d2.innerHTML += `<p>O maior valor é ${maior}, e o menor valor é ${menor}.</p>`
        d2.innerHTML += `<p>Somando todos valores, temos ${soma}.</p>`
        d2.innerHTML += `<p>As médias dos valores digitados é ${media}.</p>`
    }
}