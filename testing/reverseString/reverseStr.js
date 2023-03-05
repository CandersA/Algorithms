function reverseStr(stringToReverse) {
  const stringAsArray = stringToReverse.split('');
  const reversedArray = stringAsArray.reverse();
  const reversedString = reversedArray.join('');
  return reversedString;
}

module.exports = reverseStr;
