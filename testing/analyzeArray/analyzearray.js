function analyzeArray(array = 0) {
  const analytics = {
    average: 0,
    min: 0,
    max: 0,
    lenght: 0,
  };
  if (array === 0) {
    return analytics;
  }
  const numsCombined = array.reduce(
    (sum, currentVal) => sum + currentVal,
    0,
  );
  analytics.average = Math.round((numsCombined / array.length) * 10) / 10;
  analytics.min = array.reduce(
    (minVal, currentVal) => (minVal < currentVal ? minVal : currentVal),
  );
  analytics.max = array.reduce(
    (maxVal, currentVal) => (maxVal > currentVal ? maxVal : currentVal),
  );
  analytics.lenght = array.length;
  return analytics;
}

module.exports = analyzeArray;
