const assert = require('assert'); // Sintaxe para incluir o módulo assert

// assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.equal(50, 70); // AssertionError: 50 == 70

//equal esta depreciado, devemos usar strictEqual