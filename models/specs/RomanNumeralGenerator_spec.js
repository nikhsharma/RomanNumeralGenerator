const assert = require('assert');
const RomanNumeralGenerator = require('../RomanNumeralGenerator');

describe('Roman Numeral Generator', () => {

  let generator;

  beforeEach(() => {
    generator = new RomanNumeralGenerator();
  });

  it('should return 1 as I', () => {
    assert.strictEqual(generator.generate(1), 'I')
  });

  it('should return 5 as V', () => {
    assert.strictEqual(generator.generate(5), 'V')
  });

  it('should return 10 as X', () => {
    assert.strictEqual(generator.generate(10), 'X')
  });

  it('should return 50 as L', () => {
    assert.strictEqual(generator.generate(50), 'L')
  });

  it('should return 100 as C', () => {
    assert.strictEqual(generator.generate(100), 'C')
  });

  it('should return 500 as D', () => {
    assert.strictEqual(generator.generate(500), 'D')
  });

  it('should return 1000 as M', () => {
    assert.strictEqual(generator.generate(1000), 'M')
  });

  it('should not accept numbers below 1 or above 3999', () => {
    assert.strictEqual(generator.generate(-3), null)
    assert.strictEqual(generator.generate(4003), null)
  });
})
