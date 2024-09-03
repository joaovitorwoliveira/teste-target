const Prompt = require("prompt-sync")();
const string = Prompt(
  "Digite uma string para verificar a ocorrência da letra A: "
);

function countA(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() === "a") count++;
  }
  return count;
}

console.log(`A letra A aparece ${countA(string)} vezes na string.`);
