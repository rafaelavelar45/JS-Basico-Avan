
/*

// 1 -  Tipo Number
console.log(typeof 2);
console.log(typeof 5.4);
console.log(typeof -134);

// 2 - Operação aritmetica que são + , - , / , *

console.log(1034 + 130);
console.log(100 - 36);
console.log(10 / 2);
console.log(13 * 2);

// Sempre respeitando a ordem de precencia, resolvendo o a operação de maio procedencia

console.log(5 + 8 * 2);

// 3 - Special numbers = são considerados como números , mas nao funcionam como ele são eles
// Infinity, -Infinity , NaN( Not a Number)

console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "dsd"); // resultado NaN

console.log(typeof NaN);

// 4 - Strings são textos , existem três formas de criar dados de texto  usando , ' ', "", ``
//efeito final é o mesmo , mas cada um destes com recursos tem particularidades

console.log(typeof "texto");
console.log("Um texto");
console.log(typeof `Outro texto`);
console.log(typeof "1243");

// Uma string deve sempre começar e terminar com esmo caractere

// 5 - Símbolos especiais em strings

console.log("Testando a \n quebra de linha");

console.log("Espaçamento \t de tab ");

// 6 - Concatenação é o recurso que une dois ou mais textos utilizando o sinal de +

console.log("Oi, " + "Tudo " + "bem? ");

console.log(`Testando ` + `com ` + `crase`);

// 7 - Interpolação (Template Strings) a interpolação é um recurso semelhante a concatenação, é escrita com `` , ex `${algum código}`

console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(
  `Podemos executar qualquer coisa aqui ${console.log("teste")}`
); /* podemos executar qualquer coisa nessas chaves, no caso ali foi um exemplo que teve como
resposta undefined */

// 8 - Booleans os booleans possuem apenas dois valores true ou false , qualquer comparação, utilizando os sinais >, <, ==, resulta em um booleano
// é importante para estruturas de condição e repetição

console.log(true);
console.log(false);
console.log(5 > 20);
console.log(20 > 3);
console.log(5 < 20);
console.log( 5 == 10);
console.log(typeof false);
console.log(typeof true);

// 9 - Comparações são maior e menor > e < , maior ou igual ou menor ou igual >= <=
// igual == , diferente != , identico ===

console.log(5 <= 5);
console.log(5 < 5);
console.log(10 >= 10)
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);
console.log(10 != 10);

// 10 - Comparação de idêntico os operadores === , e !== funcionam como == , != , observando o tipo de dado
// ===  , !== compara o tipo de dado
// == , != compara o valor do dado

console.log(9 == "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");