// decimal to roman numeral converter
// for numbers 1 - 3999
// an fcc js certification project
// written 9/6/2023


function convertToRoman(num) {
  // input number has to be converted into a string so we can process it
  let newNum = num.toString();

  // final output string
  let romanNum = "";

  // what decimal digit are we currently processing? (from right end)
  let cycle = 0;

  // var to turn current decimal digit back into a number so we can use it for math
  let currentDigit = 0; 

  // chars to build the output string with
  let tens = ['I', 'X', 'C', 'M'];
  let fives = ['V', 'L', 'D'];

  // basic idea...
  // have a 'cycle' variable that iterates after each loop,
  // aka after processing each decimal digit.
  // the cycle determines which characters to use.
  // aka I, or X, or C, or else, V, or D, or L, etc.
  // the pattern for each cycle is the same,
  // for example, 9 is IX, or XC, or CM,
  // the variance is just a matter of characters used.

  // process input string one digit at a time, starting at right end.
  for (let i = newNum.length-1; i >= 0; i--) {
    currentDigit = Number(newNum[i]);

    // for decimal digits 1 to 3
    if ((1 <= currentDigit) && (currentDigit <= 3)) {
      for (let j = 0; j < currentDigit; j++) {
        romanNum = tens[cycle] + romanNum
      }
    }
    // for decimal digit 4
    if (currentDigit === 4) {
      romanNum = fives[cycle] + romanNum;
      romanNum = tens[cycle] + romanNum;
    }
    // for decimal digits 5 to 8
    if (5 <= currentDigit && currentDigit <= 8) {
      for (let k = 0; k < currentDigit-5; k++) {
      romanNum = tens[cycle] + romanNum;
      }
      romanNum = fives[cycle] + romanNum;
    }
    // for decimal digit 9
    if (currentDigit === 9) {
      romanNum = tens[cycle+1] + romanNum;
      romanNum = tens[cycle] + romanNum;
    }

  cycle++;
  }
  
  // final output
  console.log("Decimal Number: " + num);
  console.log("Roman Number: " + romanNum);
  return romanNum;
}

// example test
convertToRoman(3999);
