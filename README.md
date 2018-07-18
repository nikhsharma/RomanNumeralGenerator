# Roman Numeral Generator

A simple Node.js class to convert an integer between 1-3999 into Roman Numerals.

## Running

To run in the terminal, simply run:
```
npm i; npm start
```
## Importing

To generate roman numerals within a project, require the class in, and run ```generate()```

Example:
```
const RomanNumeralGenerator = require('./*file path to RomanNumeralGenerator.js*');
const romanNumeralGenerator = new RomanNumeralGenerator();

console.log(romanNumeralGenerator.generate(1234));
```
Output:
```
MCCXXXIV
```
