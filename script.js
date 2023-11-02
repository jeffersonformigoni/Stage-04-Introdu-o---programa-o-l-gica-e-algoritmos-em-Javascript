// solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

let userName = prompt(` Olá, escreva seu nome: `)

alert(`${userName}, Digite dois números para o calculo `)

let enteraNumber = Number(prompt(` Digite um número `))
let enterAnotherNumber = Number(prompt(` Digite outro número` ))

let   sum     = enteraNumber + enterAnotherNumber
let   sub     = enteraNumber - enterAnotherNumber
let   mult    = enteraNumber * enterAnotherNumber
const div     = enteraNumber / enterAnotherNumber
const divRest = enteraNumber % enterAnotherNumber

alert(` A soma dos números é?  ${sum} `)
alert(` A subtração dos números é?  ${sub} `)
alert(` A multiplicação dos números é?  ${mult} `)
alert(` A divisão dos números é?  ${div} `)
alert(` O resto da divisão é?  ${divRest} `)

if ((enteraNumber + enterAnotherNumber) % 2 == 0) {
    alert(` A soma dos dois números é par : ${sum} `)
} else {
    alert(` A soma dos dois números é ímpar: ${sum} `)
}

if(enteraNumber != enterAnotherNumber) {
    alert(` Os números inseridos são diferentes. `)
} else {
    alert(` Os números inseridos são iguais. `)
}

