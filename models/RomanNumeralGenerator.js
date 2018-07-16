class RomanNumeralGenerator {
  constructor() {
    this.symbolsList = {
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
    if (number < 1 || number > 3999) return null;
    if (this.symbolsList[number]) return this.symbolsList[number];

    const singleDigits = number % 10
    number -= singleDigits

    const tens = number % 100
    number -= tens

    const hundreds = number % 1000
    number -= hundreds

    const thousands = number

    let result = this.generateIndividualSymbol(thousands)
    result += this.generateIndividualSymbol(hundreds)
    result += this.generateIndividualSymbol(tens)
    result += this.generateIndividualSymbol(singleDigits)

    return result;

  }

  generateIndividualSymbol(number) {
    const values = [1000, 500, 100, 50, 10, 5, 1]
    const symbols = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    let symbol = '';

    while (number !== 0) {

      let counter = 0;

      for (let value of values) {
        if (number >= value) {
          symbol += symbols[counter]
          number -= value
          counter = 0;
          break
        } else if (number === (value - values[counter+2])) {
          symbol += (symbols[counter+2] + symbols[counter])
          number -= (value - values[counter+2])
          counter = 0;
          break
        } else if (number === (value - values[counter+1])) {
          symbol += (symbols[counter+1] + symbols[counter])
          number -= (value - values[counter+1])
          counter = 0;
          break
        }
        counter++
      }
    }
    return symbol;

  }
}

  module.exports = RomanNumeralGenerator;
