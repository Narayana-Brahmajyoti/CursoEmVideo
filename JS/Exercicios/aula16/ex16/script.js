function contar(){
    var inicio = document.getElementById("inicio")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERROR] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('[ERROR] Passo inválido! Considerando Passo = 1')
            p = 1
        }if (i < f){
                //contagem crescente
                for (let c = i; c <= f; c += p){
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            } else {
                //contagem regressiva
                for (let c = i; c >= f; c -= p){
                    res.innerHTML += ` ${c} \u{1F449}`
                }
            }
            res.innerHTML += ` \u{1F3C1}`
    }
        
}

