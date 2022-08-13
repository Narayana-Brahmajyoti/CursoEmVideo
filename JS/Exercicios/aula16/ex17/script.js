
function calcular(){

    let num = document.getElementById('number')
    let tab = document.getElementById('seltab')
    //let result = document.getElementById('result')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let number = Number(num.value)
        let cont = 1
        while (cont <=10){
            let item = document.createElement('option')
            item.text = `${number} x ${cont} = ${number * cont}`
            tab.appendChild(item)
            cont++
            
        }
            
    }

}
