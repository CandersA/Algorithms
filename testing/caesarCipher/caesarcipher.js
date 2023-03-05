/* eslint-disable no-param-reassign */
function getChar(char, index) {
  if (char === 'z') {
    if (index > 1) {
      char = 'a';
      index -= 1;
    } else {
      return 'a';
    }
  } if (char === 'Z') {
    if (index > 1) {
      char = 'A';
      index -= 1;
    } else {
      return 'A';
    }
  } if (char === ' ') {
    return ' ';
  }

  let newCharCode = char.charCodeAt(0) + index;

  if (char === char.toUpperCase()) {
    while (newCharCode > 90) {
      index = newCharCode - 90;
      newCharCode = 64 + index;
    }
  } else {
    while (newCharCode > 122) {
      index = newCharCode - 122;
      newCharCode = 96 + index;
    }
  }

  const newChar = String.fromCharCode(newCharCode);
  return newChar;
}

function caesarCipher(string, index = 1) {
  const stringToArray = string.split('');
  const cipharedArray = stringToArray.map((letter) => getChar(letter, index));
  const cipharedString = cipharedArray.join('');
  return cipharedString;
}

module.exports = caesarCipher;
