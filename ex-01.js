const Prompt = require("prompt-sync")();
const numero = Number(Prompt("Digite um número: "));

function fibonacci(num) {
  if (num < 0) return false;

  let a = 0;
  let b = 1;

  while (a < num) {
    const next = a + b;
    a = b;
    b = next;
  }

  return a === num;
}

if (fibonacci(numero)) {
  console.log("O número pertence à sequencia de Fibonacci");
} else {
  console.log("O número não pertence à sequencia de Fibonacci");
}
