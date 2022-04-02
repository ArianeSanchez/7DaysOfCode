// #7DaysOfCode - Lógica JS 2/7: Variáveis

//- Qual o seu nome? Quantos anos você tem? Qual linguagem de programação você está estudando?

var nome = prompt("Qual o seu nome?");
var idade = prompt("Qual a sua idade?");
var linguagem = prompt("Qual linguagem de programação você está estudando?");

var resposta = prompt('Olá' + " " + nome + " " + ", você tem" + " " + idade + " " + "anos e já está aprendendo" + " " + linguagem + " " + "! Você gosta de estudar " + " " + linguagem + " " + "?  *Digite 1 para SIM ou 2 para NÃO."); 

while (resposta != 1 && resposta != 2) {
    resposta = prompt("Você gosta de estudar " + linguagem + "?  *Digite 1 para SIM ou 2 para NÃO.");
}

if (resposta == 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
} else {
 alert("Ahh que pena... Já tentou aprender outras linguagens?");
}


