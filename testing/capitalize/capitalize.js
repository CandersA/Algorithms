function capitalizeFirstLetter(string) {
  if (string !== '') {
    const stringToArray = string.split('');
    stringToArray[0] = stringToArray[0].toUpperCase();
    // eslint-disable-next-line no-param-reassign
    string = stringToArray.join('');
  }
  return string;
}

module.exports = capitalizeFirstLetter;
