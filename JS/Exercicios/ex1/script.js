function pegarID(id) {
    return document.getElementById(id)
}

function carregar(){
    var msg = pegarID('msg')
    var img = pegarID('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
        msg.innerHTML = `Agora são ${hora}:${minuto}.`
    if (hora >= 0 && hora < 12) {
        img.src = './img/manha.png'
        document.body.style.background = '#538FCE'
    } else if (hora >= 12 && hora <= 18) {
        img.src = './img/tarde.png'
        document.body.style.background = '#F29F05'
    } else {
        img.src = './img/noite.png'
        document.body.style.background = '#133751'
    }
}