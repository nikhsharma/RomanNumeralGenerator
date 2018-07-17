const assert = require('assert');
const RomanNumeralGenerator = require('../RomanNumeralGenerator');

describe('Roman Numeral Generator', () => {

  let generator;

  beforeEach(() => {
    generator = new RomanNumeralGenerator();
  });

  it('should not accept numbers below 1 or above 3999', () => {
    assert.strictEqual(generator.generate(0), null)
    assert.strictEqual(generator.generate(4000), null)
  });

  it('should return 1 as I', () => {
    assert.strictEqual(generator.generate(1), 'I')
  });

  it('should return 3 as III', () => {
    assert.strictEqual(generator.generate(3), 'III')
  });

  it('should return 4 as IV', () => {
    assert.strictEqual(generator.generate(4), 'IV')
  });

  it('should return 5 as V', () => {
    assert.strictEqual(generator.generate(5), 'V')
  });

  it('should return 9 as IX', () => {
    assert.strictEqual(generator.generate(9), 'IX')
  });

  it('should return 10 as X', () => {
    assert.strictEqual(generator.generate(10), 'X')
  });

  it('should return 19 as XIX', () => {
    assert.strictEqual(generator.generate(19), 'XIX')
  });


  it('should return 20 as XX', () => {
    assert.strictEqual(generator.generate(20), 'XX')
  });

  it('should return 44 as XLIV', () => {
    assert.strictEqual(generator.generate(44), 'XLIV')
  });

  it('should return 49 as XLIX', () => {
    assert.strictEqual(generator.generate(49), 'XLIX')
  });

  it('should return 50 as L', () => {
    assert.strictEqual(generator.generate(50), 'L')
  });

  it('should return 54 as LIV', () => {
    assert.strictEqual(generator.generate(54), 'LIV')
  });

  it('should return 99 as XCIX', () => {
    assert.strictEqual(generator.generate(99), 'XCIX')
  });

  it('should return 100 as C', () => {
    assert.strictEqual(generator.generate(100), 'C')
  });

  it('should return 126 as CXXVI', () => {
    assert.strictEqual(generator.generate(126), 'CXXVI')
  });

  it('should return 361 as CCCLXI', () => {
    assert.strictEqual(generator.generate(361), 'CCCLXI')
  });

  it('should return 500 as D', () => {
    assert.strictEqual(generator.generate(500), 'D')
  });

  it('should return 748 as DCCXLVIII', () => {
    assert.strictEqual(generator.generate(748), 'DCCXLVIII')
  });

  it('should return 1000 as M', () => {
    assert.strictEqual(generator.generate(1000), 'M')
  });

  it('should return 1472 as MCDLXXII', () => {
    assert.strictEqual(generator.generate(1472), 'MCDLXXII')
  });

  it('should return 2000 as MM', () => {
    assert.strictEqual(generator.generate(2000), 'MM')
  });

  it('should return 2163 as MMCLXIII', () => {
    assert.strictEqual(generator.generate(2163), 'MMCLXIII')
  });

  it('should return 2897 as MMDCCCXCVII', () => {
    assert.strictEqual(generator.generate(2897), 'MMDCCCXCVII')
  });

  it('should return 3428 as MMMCDXXVIII', () => {
    assert.strictEqual(generator.generate(3428), 'MMMCDXXVIII')
  });

  it('should return 3999 as MMMCMXCIX', () => {
    assert.strictEqual(generator.generate(3999), 'MMMCMXCIX')
  });
})
