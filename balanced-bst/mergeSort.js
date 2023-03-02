function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middleIndex = Math.ceil(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  return mergeTwoArrays(mergeSort(leftArray), mergeSort(rightArray));
}

function mergeTwoArrays(leftArray, rightArray) {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex]);
      leftIndex += 1;
    } else {
      resultArray.push(rightArray[rightIndex]);
      rightIndex += 1;
    }
  }

  if (leftArray[leftIndex]) {
    const unaddedElements = leftArray.slice(leftIndex);
    resultArray.push(...unaddedElements);
  } else {
    const unaddedElements = rightArray.slice(rightIndex);
    resultArray.push(...unaddedElements);
  }

  return resultArray;
}

export default mergeSort;
