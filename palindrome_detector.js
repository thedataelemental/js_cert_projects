// palindrome detector. an fcc certification project. written 9/2/2023


function palindrome(str) {
  let alphaNumStr = "";
  let reversedStr = "";
  let allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  console.log("\nOriginal input string: " + str);

  // need 2 main steps. one to remove special characters, and one to flip string.

  // remove any special characters, spaces, etc
  for (let k = 0; k < str.length; k++) {
    // check if character is in list of allowed characters
    for (let j = 0; j < allowedChars.length; j++) {
      if (str[k] === allowedChars[j]) {
        alphaNumStr += str[k];
      }
    }
  }
  console.log("String with any special chars removed: " + alphaNumStr);

  // reverse string
  for (let i = alphaNumStr.length-1; i >= 0; i--) {
    reversedStr += alphaNumStr[i]
  }
  console.log("Reversed string: " + reversedStr);

  // final verdict
  if (reversedStr.toUpperCase() === alphaNumStr.toUpperCase()) {
    console.log("Palindrome detected");
    return true;
  }
  else {
    console.log("No palindrome detected");
    return false;
  }
}

// some tests
palindrome("_eye");
palindrome("race car");
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");

