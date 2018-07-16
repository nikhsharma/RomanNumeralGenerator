class RomanNumeralGenerator {

  generate(number) {
    const symbols = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    }

    if (symbols[number]) return symbols[number];

  }
}

module.exports = RomanNumeralGenerator;
