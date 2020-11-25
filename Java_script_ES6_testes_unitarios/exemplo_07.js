const assert = require('assert');

const division = (num1, num2) => {
    if (num2 === 0){ return 'erro'}
    return num1 / num2;
}

const result = division(10, 2);

assert.strictEqual(result, 5, 'Erro resultado esperado e 10!');