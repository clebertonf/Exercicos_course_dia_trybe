const assert = require('assert');

//Exemplo com strings
const welcome = (name) => { return`Ola ${name} seja bem-vindo!`};

const expected = welcome('Cleberton');

assert.strictEqual(expected, 'Ola Cleberton seja bem-vindo!', 'Erro na saida');

//exemplo com funçoes

function divisao(num1, num2){
    return num1 / num2;
}

const expected2 = divisao(10,2);

assert.strictEqual(expected2, 5, 'Esperado resultado de 5! divisão de 10 por 2.' );
