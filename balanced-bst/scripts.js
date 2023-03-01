const Node = (d) => {
  const data = d;
  const left = null;
  const right = null;

  return { data, left, right };
};

const Tree = () => {
  let root = null;

  const buildTree = (arr, start, end) => {
    const sortedArray = sortArray(arr);
    if (start > end) {
      return null;
    }
    const mid = parseInt((start + end) / 2, 10);
    const node = Node(sortedArray[mid]);
    node.left = buildTree(sortedArray, start, mid - 1);
    node.right = buildTree(sortedArray, mid + 1, end);
    root = node;
    return root;
  };

  const sortArray = (arrayToSort) => {
    const sortedArray = mergeSort(arrayToSort);
    return sortedArray;
  };

  return { buildTree };
};

const binaryTree = Tree();
const treeArray = [1, 4, 6, 7, 2, 9, 11];
const endOfArray = treeArray.length - 1;
console.log(binaryTree.buildTree(treeArray, 0, endOfArray));

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
