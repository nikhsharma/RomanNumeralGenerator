class RomanNumeralGenerator {
  constructor() {
    this.symbols = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    }
    this.symbolValues = Object.keys(this.symbols).reverse()
  }

  generate(number) {
    if (number < 1 || number > 3999) return null;
    if (this.symbols[number]) return this.symbols[number];

    let result = '';

    while (number !== 0) {

      for (let value of this.symbolValues) {
        if (number >= value) {
          result += this.symbols[value];
          number -= value
          break;
        }
      }

      continue;
    }
    return result;
  }
}

module.exports = RomanNumeralGenerator;
