const assert = require('assert');
const { constants } = require('buffer');

const welcome = (name) => { return`Ola ${name} seja bem-vindo!`};

const expected = welcome('Cleberton');

assert.strictEqual(expected, 'Ola Cleberton seja bem-vindo!', 'Erro na saida');

