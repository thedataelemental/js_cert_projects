// US phone number validator
// an fcc certification project
// written 9/3/2023.


function telephoneCheck(str) {
  console.log("Number to validate: " + str);
  let numbers = "1234567890";
  let numCount = 0;
  let numIsValid = true; // assume tele number is valid, look for invalidities
  let validCounts = [10, 11]; // valid numbers of total digits
  let validTotal = false;
  let dashCount = 0;
  // parentheses detection flags
  let openParPresent = false;
  let closedParPresent = false;

  // iterate through input string / telephone number
  for (let i = 0; i < str.length; i++) {

    // count total number of digits in telephone number
    for (let j = 0; j < numbers.length; j++) {
      if (str[i] === numbers[j]) {
        numCount++;
      }
    }

    // check for open parentheses
    if (str[i] === "(") {
      openParPresent = true;
      // are there not 0 or 1 numbers before the "("? if so, invalid.
      if ((numCount < 0) || (numCount > 1)) {
        numIsValid = false;
      }
    }

    // check for closed parentheses
    if (str[i] === ")") {
      closedParPresent = true;
      // are there not 3 or 4 numbers before the ")"? if so, invalid.
      if ((numCount < 3) || (numCount > 4)) {
        numIsValid = false;
      }
      // check here for whether or not there was ever a "(" beforehand.
      if (openParPresent == false) {
        numIsValid = false;
      }
    }

    // check for dashes in invalid locations (this could be better)
    if (str[i] === "-") {
      if ((numCount < 1) || (numCount == 2) || (numCount == 5) || (numCount > 7)) {
        numIsValid = false;
      }
    }

  }

  // ------ final validity checks ------

  // number of digits okay (10 or 11)?
  for (let k = 0; k < validCounts.length; k++) {
    if (validCounts[k] == numCount) {
      validTotal = true;
    }
  }
  if (validTotal != true) {
    numIsValid = false;
  }

  // is country code okay, if it's present?
  if (numCount === 11) {
    if (str[0] != 1) {
      numIsValid = false;
    }
  }

  // if there was an "(", was there also a ")"?
  if (openParPresent == true) {
    if (closedParPresent == false) {
      numIsValid = false;
    }
  }

  // --- final output ---
  console.log("total digits: " + numCount);
  console.log("valid number: " + numIsValid);
  return numIsValid;
}

// example test
telephoneCheck("1 (555) 555-5555");
