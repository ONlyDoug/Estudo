// Função para exibir "Olá, mundo!" no console
function helloWorld() {
  console.log("Olá, mundo!");
}

// Função para exibir "Olá, [nome]!" no console
function greetWithName(nome) {
  console.log("Olá, " + nome + "!");
}

// Função para retornar o dobro de um número
function doubleNumber(numero) {
  return numero * 2;
}

// Função para retornar a média de três números
function calculateAverage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

// Função para retornar o maior de dois números
function findMax(num1, num2) {
  return Math.max(num1, num2);
}

// Função para retornar o resultado da multiplicação de um número por ele mesmo
function squareNumber(numero) {
  return numero * numero;
}

// Exemplos de uso das funções:
helloWorld(); // Exibe "Olá, mundo!" no console
greetWithName("Douglas"); // Exibe "Olá, Douglas!" no console
console.log(doubleNumber(5)); // Exibe 10 no console
console.log(calculateAverage(3, 5, 7)); // Exibe 5 no console
console.log(findMax(10, 20)); // Exibe 20 no console
console.log(squareNumber(4)); // Exibe 16 no console
