const RomanNumeralGenerator = require('./models/RomanNumeralGenerator');
const conif = require('node-console-input');

const generator = new RomanNumeralGenerator();

let input;

while (input !== 'q') {

  input = conif.getConsoleInput('Input a number between 1 and 3999 generate its roman numeral equivilant. (enter q to quit):   ');
  
  if (input >= 1 || input <= 3999) {
    console.log(generator.generate(input));
  } else if (input === 'q') {
    console.log('Goodbye');
  } else {
    console.log('please input a number between 1 - 3999. (enter 0 to quit)');
  }
}
