const RomanNumeralGenerator = require('./models/RomanNumeralGenerator');
const conif = require('node-console-input');

const romanNumeralGenerator = new RomanNumeralGenerator();

let input;

// Until q is inputted
while (input !== 'q') {

  // Get user input
  input = conif.getConsoleInput('Input a number between 1 and 3999 to generate its roman numeral equivilant. (enter q to quit):   ');

  // Check user input
  if (input >= 1 && input <= 3999) {
    console.log(romanNumeralGenerator.generate(input));
  } else if (input === 'q') {
    console.log('Goodbye');
  } else {
    console.log('please input a number between 1 - 3999.');
  }
}
