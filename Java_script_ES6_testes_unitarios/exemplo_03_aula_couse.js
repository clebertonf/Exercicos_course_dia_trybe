const assert = require('assert'); //chamando modulo assert

const sum = (num1, num2) => num1 + num2; //crio a função de soma

const expected = sum(5,4); // recebe a função com parametros

assert.strictEqual(expected, 9, 'A soma e igua a 9'); // testamos o codigo
