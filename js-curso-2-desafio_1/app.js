// Alterando o conteúdo da tag h1

let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

// Função para exibir mensagem no console

function mensagemConsole() {
  console.log("Botão clicado!");
}
// Função para exibir alerta

function mostrarAlerta() {
  alert("Eu amo JavaScript!");
}
// Função para exibir prompt e alerta com o nome da cidade

function mostrarCidadePrompt() {
  let nomeDaCidade = prompt(
    "Digite o nome de uma cidade do Brasil que você gosta muito:"
  );
  alert(`Estive em ${nomeDaCidade} e lembrei de você`);
}
// Função para somar dois números e exibir o resultado em um alerta

function mostrarSoma() {
  var num1 = parseFloat(prompt("Digite o primeiro número:"));
  var num2 = parseFloat(prompt("Digite o segundo número:"));
  var soma = num1 + num2;
  alert("O resultado da soma é: " + soma);
}
