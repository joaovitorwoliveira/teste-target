// 3) Observe o trecho de código abaixo: int INDICE = 12, SOMA = 0, K = 1; enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; } imprimir(SOMA);

const indice = 12;
let soma = 0;
let k = 1;

while (k < indice) {
  k = k + 1;
  soma = soma + k;
}

console.log(soma);

// O resultado é 77.
