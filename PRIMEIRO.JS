// #7DaysOfCode - Lógica JS 1/7: Operações SOLUÇÃO

let numeroUm = 1 // Número
let stringUm = '1' // Texto
let numeroTrinta = 30 // Número
let stringTrinta = '30' // Texto
let numeroDez = 10 // Número
let stringDez = '10' // Texto

// O operador == (igual a) compara o valor e não o tipo das variáveis 
if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

// O operador != (diferente de) compara o tipo das variáveis
if (numeroTrinta != stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

// O operador == (igual a) compara o valor e não o tipo das variáveis
if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
