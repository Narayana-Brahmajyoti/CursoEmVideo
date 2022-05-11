
//---------------Aula 9-----------------//

// var nome = window.prompt('Qual é seu nome?')
// window.alert('E un grande prazer te conhecer, ' + nome)

// var n1 = Number(window.prompt('Digite um núnero:' )) 
// var n2 = Number(window.prompt('Digite outro número:' ))
// var s =  n1 + n2
// window.alert('A soma dos valores é ' + s )


//---------------Aula 10-----------------

// var area = window.document.getElementById('area')

// area.addEventListener('click', clicar)
// area.addEventListener('mouseenter', entrar)
// area.addEventListener('mouseout', sair)

// function clicar(){
//     area.innerText = 'Clicou!'
//     area.style.background = 'red'
// }
// function entrar(){
//     area.innerText = 'Entrou!'
//     area.style.background = 'blue'
// }
// function sair(){
//     area.innerText = 'Saiu!'
//     area.style.background = 'green'
// }
//---------------parte 2- aula 10-----------
// function somar(){
//     var tn1 = document.getElementById("txtn1")
//     var tn2 = document.getElementById("txtn2")
//     var res = document.getElementById("res")
//     var n1 = Number(tn1.value)
//     var n2 = Number(tn2.value)
//     var s = n1 + n2
//     res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
// }
//-----------Aula 11-----------------
//                            ----------condição simples----------
// var vel = 78.5
// console.log(`A velocidade do seu carro é ${vel}Km/h`)
// if(vel > 60){ //condição simples só possui o if , não possui o else
//     console.log('Você ultrapassou a velocidade permitida. Multado!')
// }
// console.log(`Dirija sempre usando cinto de segurança`)

//                              ----------condição composta----------
//           ----------Nacionalidade--------------            
// var pais = "França"
// console.log(`Vivendo em ${pais}`)
// if (pais == "Brasil"){
//     console.log('Você é brasileiro')
// } else {
//     console.log('Você é estrangeiro')
// }

//função para verificar se o usuário é brasileiro ou não na pagina HTML
// function verificar(){  

//     //var pais = document.getElementById("pais")
//     var pais = document.getElementById("pais")
//     var res = document.getElementById("res")
//     res.innerHTML += `<p>Vivendo em ${pais.value}</p>`
//     if (pais.value == "Brasil"){
//     res.innerHTML += `<p>Você é brasileiro</p>`
//     } else {
//     res.innerHTML += `<p>Você é estrangeiro</p>`
//     }
// }



//           ---------- Sistema de Multas-------------
 function calcular(){
   
    var txtv = document.getElementById("txtvel")
    var vel = Number(txtv.value)
    var res = document.getElementById("res")
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
    if (vel > 60){
        res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre usando cinto de segurança</p>`
 }

// ----------------Aula 12--------------

// var idade = 67
// console.log(`Você tem ${idade} anos.`)
// if (idade < 16){
//     console.log('Não vota')
// } else if( idade < 18 || idade > 65){
//     console.log('Voto opcional')
// } else {
//     console.log('Voto obrigatório')
// }

// ----------------parte 2- aula 12--------------
// var agora = new Date()
// var hora = agora.getHours()
// console.log(`Agora são exatamente ${hora} horas.`)
// if (hora < 12){
//     console.log("Bom Dia!")
//  }else if (hora <= 18) {
//      console.log("Boa Tarde!")
//  }else {
//      console.log("Boa Noite!")
// } 

// var agora = new Date()
// var diaSem = agora.getDay()


// switch(diaSem){
//     case 0:
//         console.log('Hoje é domingo')
//         break
//     case 1:
//         console.log('Hoje é segunda-feira')
//         break
//     case 2:
//         console.log('Hoje é terça-feira')
//         break
//     case 3:
//         console.log('Hoje é quarta-feira')
//         break
//     case 4:
//         console.log('Hoje é quinta-feira')
//         break
//     case 5:
//         console.log('Hoje é sexta-feira')
//         break
//     case 6:
//         console.log('Hoje é sábado')
//         break
//     default:
//         console.log('[ERRO] Dia inválido!')
//         break
// }