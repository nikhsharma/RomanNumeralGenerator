const assert = require('assert');
const RomanNumeralGenerator = require('../RomanNumeralGenerator');

describe('Roman Numeral Generator', function() {

  let generator;

  beforeEach(function() {
    generator = new RomanNumeralGenerator();
  })

  xit('should return 1 as I', function() {
    assert.strictEqual(generator.generate(1), 'I')
  })

  xit('should return 5 as V', function() {
    assert.strictEqual(generator.generate(5), 'V')
  })

  xit('should return 10 as X', function() {
    assert.strictEqual(generator.generate(4), 'X')
  })

  xit('should return 50 as L', function() {
    assert.strictEqual(generator.generate(50), 'L')
  })

  xit('should return 100 as C', function() {
    assert.strictEqual(generator.generate(100), 'C')
  })

  xit('should return 500 as D', function() {
    assert.strictEqual(generator.generate(4), 'D')
  })

  xit('should return 1000 as M', function() {
    assert.strictEqual(generator.generate(4), 'M')
  })
})
