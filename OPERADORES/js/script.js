// 1 -  Tipo Number
console.log(typeof 2);
console.log(typeof 5.40)
console.log(typeof -134)

// 2 - Operação aritmetica que são + , - , / , *


console.log(1034 + 130)
console.log(100 - 36)
console.log(10 / 2)
console.log(13 * 2)

// Sempre respeitando a ordem de precencia, resolvendo o a operação de maio procedencia 

console.log(5 + (8 * 2))


// 3 - Special numbers = são considerados como números , mas nao funcionam como ele são eles
// Infinity, -Infinity , NaN( Not a Number)

console.log(typeof Infinity)

console.log(typeof -Infinity)

console.log(12 * "dsd") // resultado NaN

console.log(typeof NaN)


// 4 - Strings são textos , existem três formas de criar dados de texto  usando , ' ', "", ``
//efeito final é o mesmo , mas cada um destes com recursos tem particularidades

console.log(typeof'texto')
console.log("Um texto")
console.log(typeof`Outro texto`)
console.log(typeof'1243')

// Uma string deve sempre começar e terminar com esmo caractere

// 5 - Símbolos especiais em strings

console.log("Testando a \n quebra de linha")

console.log("Espaçamento \t de tab ")

// 6 - Concatenação é o recurso que une dois ou mais textos utilizando o sinal de +

console.log("Oi, " + "Tudo " + "bem? ")

console.log(`Testando ` + `com ` + `crase`)