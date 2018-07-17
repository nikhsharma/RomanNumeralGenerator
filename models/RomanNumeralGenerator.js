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
  };

  generate(number) {
    // If invalid number, return null
    if (number < 1 || number > 3999) return null;

    // If number is in the symbol list, return it's symbol
    if (this.symbolsList[number]) return this.symbolsList[number];

    let result;

    // Seperate number's digits
    const singleDigits = number % 10;
    number -= singleDigits;
    const tens = number % 100;
    number -= tens;
    const hundreds = number % 1000;
    number -= hundreds;
    const thousands = number;

    // Generate symbol for each digit seperately, add it to result string
    result = this.generateIndividualSymbol(thousands);
    result += this.generateIndividualSymbol(hundreds);
    result += this.generateIndividualSymbol(tens);
    result += this.generateIndividualSymbol(singleDigits);

    return result;
  }


  generateIndividualSymbol(number) {
    // Create seperate arrays for the symbols and their values in descending order
    const symbols = Object.values(this.symbolsList).reverse();
    const values = Object.keys(this.symbolsList).reverse();

    let symbolResult = '';

    while (number !== 0) {

      // Counter used for index position in loop
      let counter = 0;

      for (let value of values) {
        if (number >= value) {
          // Add symbol to result, subtract the symbol's value from number, reset the counter, restart loop.
          symbolResult += symbols[counter];
          number -= value;
          counter = 0;
          break;
        } else if (number === (value - values[counter+2])) {
          // Check if symbol should be preceded by second smaller symbol
          symbolResult += (symbols[counter+2] + symbols[counter]);
          number -= (value - values[counter+2]);
          counter = 0;
          break;
        } else if (number === (value - values[counter+1])) {
          // Check if symbol should be preceded by next smaller symbol
          symbolResult += (symbols[counter+1] + symbols[counter]);
          number -= (value - values[counter+1]);
          counter = 0;
          break;
        } else {
          // Increment counter if current symbol not needed
          counter++;
        }
      }
    }
    return symbolResult;
  };
};

module.exports = RomanNumeralGenerator;
