function pegarID(id){
    return document.getElementById(id)
}

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = pegarID('txtAno') 
    var res = pegarID('res')

    if (formAno.value.lenght == 0 || (formAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formSex = document.getElementsByName('radSex')
        var idade = ano - (formAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(formSex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './img/menino-baby.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './img/homem-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', './img/homem-adulto.jpg')
            } else {
                img.setAttribute('src', './img/homem-idoso.jpg')
            }
        } else if(formSex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', './img/menina-baby.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', './img/mulher-jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', './img/mulher-adulta.jpg')
            } else {
                img.setAttribute('src', './img/mulher-idosa.jpg')
            }
            
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }
}
