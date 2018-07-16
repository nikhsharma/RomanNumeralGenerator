const assert = require('assert');
const RomanNumeralGenerator = require('../RomanNumeralGenerator');

describe('Roman Numeral Generator', function() {

  let generator;

  beforeEach(function() {
    generator = new RomanNumeralGenerator();
  })

  it('should return 1 as I', function() {
    assert.strictEqual(generator.generate(1), 'I')
  })

  it('should return 5 as V', function() {
    assert.strictEqual(generator.generate(5), 'V')
  })

  it('should return 10 as X', function() {
    assert.strictEqual(generator.generate(10), 'X')
  })

  it('should return 50 as L', function() {
    assert.strictEqual(generator.generate(50), 'L')
  })

  it('should return 100 as C', function() {
    assert.strictEqual(generator.generate(100), 'C')
  })

  it('should return 500 as D', function() {
    assert.strictEqual(generator.generate(500), 'D')
  })

  it('should return 1000 as M', function() {
    assert.strictEqual(generator.generate(1000), 'M')
  })
})
