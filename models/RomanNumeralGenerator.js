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
  }

  generate(number) {

    if (this.symbols[number]) return this.symbols[number];

  }
}

module.exports = RomanNumeralGenerator;
