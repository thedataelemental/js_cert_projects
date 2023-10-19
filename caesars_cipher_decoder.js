// caesar / ROT13 cipher decoder. an fcc certification project. written 9/2/2023.


function rot13(str) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let new_char = "";
  let decodedStr = "";
  let charIsAlpha = false;
  console.log("Original text: " + str);

  // iterate through input string
  for (let i = 0; i < str.length; i++) {
    // first, is the character even a letter?
    charIsAlpha = false;
    for (let k = 0; k < chars.length; k++) {
      // match found. char is a letter
      if (str[i] === chars[k]) {
        charIsAlpha = true;
        // apply cipher shift
        k += 13;
        // account for roll-over past end of alphabet
        if (k >= 26) {
          k -= 26;
        }
        new_char = chars[k];
        decodedStr += new_char;
        break;
      }
    }
    // if the character isn't a letter, just add it directly to the output string.
    if (charIsAlpha == false) {
      decodedStr += str[i];
    }
        
      }
  // final output
  console.log("Decoded: " + decodedStr);
  return decodedStr;
  }

// test
rot13("SERR PBQR PNZC");
