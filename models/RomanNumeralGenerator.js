class RomanNumeralGenerator {
  constructor() {
    this.symbolsFull = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    }
    this.symbolValues = Object.keys(this.symbolsFull).reverse();
    this.symbols = Object.values(this.symbolsFull).reverse();
  }

  generate(number) {
    if (number < 1 || number > 3999) return null;
    if (this.symbolsFull[number]) return this.symbolsFull[number];

    let result = '';

    while (number !== 0) {

      for (let i = 0; i < this.symbols.length; i++) {
        let value = this.symbolValues[i];
        let symbol = this.symbols[i];

        if (number >= value) {
          result += symbol;
          number -= value;
          break;
        } else if (number < value && number >= (value - this.symbolValues[i+1])) {

          if(number >= (value - this.symbolValues[i+2])) {
            result += (this.symbols[i+2] + symbol)
            number -= (value - this.symbolValues[i+2]);
            break;
          }
          result += (this.symbols[i+1] + symbol)
          number -= (value - this.symbolValues[i+1]);
          break;

        }
      }
      continue;
    }
    return result;
  }
}

module.exports = RomanNumeralGenerator;
