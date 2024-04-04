// Exercícios utilizando forEach e map:

// Exercícios com forEach:
console.log("Exercícios utilizando forEach:");

// Fácil:
console.log("\nFácil:");
// 1. Imprimir todos os elementos de um array de números:
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => console.log(numero));

// 2. Imprimir cada string em maiúsculas de um array de strings:
const strings = ['hello', 'world', 'javascript'];
strings.forEach(str => console.log(str.toUpperCase()));

// Intermediário:
console.log("\nIntermediário:");
// 1. Imprimir o valor de uma propriedade específica de cada objeto em um array de objetos:
const objetos = [{nome: 'João', idade: 30}, {nome: 'Maria', idade: 25}];
objetos.forEach(objeto => console.log(objeto.nome));

// 2. Calcular e imprimir a soma de todos os elementos de um array de números:
const numeros2 = [1, 2, 3, 4, 5];
let soma = 0;
numeros2.forEach(numero => soma += numero);
console.log(soma);

// Difícil:
console.log("\nDifícil:");
// 1. Calcular e imprimir a soma de cada linha de uma matriz (array de arrays) usando forEach:
const matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
matriz.forEach(linha => {
    let somaLinha = 0;
    linha.forEach(numero => somaLinha += numero);
    console.log(somaLinha);
});

// 2. Encontrar o maior número em cada subarray de um array de arrays de números e imprimir:
const arrayDeArrays = [[1, 5, 3], [9, 2, 8], [4, 7, 6]];
arrayDeArrays.forEach(subarray => {
    let maior = subarray[0];
    subarray.forEach(numero => {
        if (numero > maior) {
            maior = numero;
        }
    });
    console.log(maior);
});

// Exercícios utilizando map:
console.log("\nExercícios utilizando map:");

// Fácil:
console.log("\nFácil:");
// 1. Multiplicar cada número em um array por 2 e retornar um novo array:
const numerosMultiplicados = numeros.map(numero => numero * 2);
console.log(numerosMultiplicados);

// 2. Converter cada palavra em maiúsculas em um array de palavras e retornar um novo array:
const palavrasMaiusculas = strings.map(palavra => palavra.toUpperCase());
console.log(palavrasMaiusculas);

// Intermediário:
console.log("\nIntermediário:");
// 1. Retornar um novo array apenas com os valores de uma propriedade específica de cada objeto em um array de objetos:
const nomes = objetos.map(objeto => objeto.nome);
console.log(nomes);

// 2. Retornar um novo array com o comprimento de cada string em um array de strings:
const comprimentos = strings.map(str => str.length);
console.log(comprimentos);

// Difícil:
console.log("\nDifícil:");
// 1. Retornar um novo array com a soma de cada linha de uma matriz (array de arrays):
const somasDasLinhas = matriz.map(linha => {
    let somaLinha = 0;
    linha.forEach(numero => somaLinha += numero);
    return somaLinha;
});
console.log(somasDasLinhas);

// 2. Retornar um novo array com a raiz quadrada de cada número, arredondada para o inteiro mais próximo:
const raizesQuadradas = numeros.map(numero => Math.round(Math.sqrt(numero)));
console.log(raizesQuadradas);
