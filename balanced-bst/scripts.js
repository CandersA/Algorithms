/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/extensions
import mergeSort from './mergeSort.js';

const Node = (d) => {
  const data = d;
  const left = null;
  const right = null;

  return { data, left, right };
};

const Tree = () => {
  const buildTree = (arr, start, end) => {
    // Sort array with merge sort

    if (start > end) {
      return null;
    }
    // Get the middle of the sorted array and set it as the root
    const mid = parseInt((start + end) / 2, 10);
    const node = Node(arr[mid]);
    // Recursively build a balanced tree, unit start > end is met
    node.left = buildTree(arr, start, mid - 1);
    node.right = buildTree(arr, mid + 1, end);

    return node;
  };

  const searchTree = (root, key) => {
    if (root === null || root.data === key) {
      return root;
    } if (root.data < key) {
      return searchTree(root.right, key);
    }
    return searchTree(root.left, key);
  };

  const insertKey = (root, key) => {
    // If key doesn't exist add it to the leaf of the tree
    if (root === null) {
      const newRoot = Node(key);
      return newRoot;
    }
    // If a key already exists return it, so it doesn't duplicate
    if (key === root.data) {
      return root;
    }
    /* If key is more than the data in root, run recursive function to the right of root, else
    run it to the left */
    if (key > root.data) {
      root.right = insertKey(root.right, key);
    } else if (key < root.data) {
      root.left = insertKey(root.left, key);
    }

    return root;
  };

  const deleteKey = (root, key) => {
    if (root === null) {
      return root;
    }
    if (key < root.data) {
      root.left = deleteKey(root.left, key);
    } else if (key > root.data) {
      root.right = deleteKey(root.right, key);

    // If the key has been found
    } else {
      if (root.right === null) {
        return root.left;
      } if (root.left === null) {
        return root.right;
      }

      // If the key to be deleted, has both right and left children

      root.data = minValue(root.right);
      root.right = deleteKey(root.right, root.data);
    }

    return root;
  };

  const minValue = (root) => {
    /* If there is no left child to the right child, the min value is the right child */

    let minv = root.data;

    // If there is a left child to the right child, then that's the min value
    while (root.left != null) {
      minv = root.left.data;
      root = root.left;
    }
    return minv;
  };

  const levelOrder = (root) => {
    const queue = [root];
    const numArray = [];

    // While queue is not empty
    while (queue.length) {
      // Take first element of queue
      const node = queue.shift();

      // If the first element has either left or right child push them to the queue
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
      // Add data of node to numArray so it can be returned
      numArray.push(node.data);
    }

    return numArray;
  };

  const preOrder = (root, preOrderArr = []) => {
    if (root === null) {
      return;
    }
    preOrderArr.push(root.data);
    preOrder(root.left, preOrderArr);
    preOrder(root.right, preOrderArr);

    // eslint-disable-next-line consistent-return
    return preOrderArr;
  };

  const inOrder = (root, inOrderArr = []) => {
    if (root === null) {
      return;
    }
    inOrder(root.left, inOrderArr);
    inOrderArr.push(root.data);
    inOrder(root.right, inOrderArr);

    // eslint-disable-next-line consistent-return
    return inOrderArr;
  };

  const postOrder = (root, postOrderArr = []) => {
    if (root === null) {
      return;
    }
    postOrder(root.left, postOrderArr);
    postOrder(root.right, postOrderArr);
    postOrderArr.push(root.data);

    // eslint-disable-next-line consistent-return
    return postOrderArr;
  };

  // Height is defined as the number of edges in longest path from a given node to a leaf node.
  const getHeight = (node) => {
    if (node == null) {
      return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  };

  // Depth is defined as the number of edges in path from a given node to the tree’s root node.
  const getDepth = (root, node, depth = 0) => {
    if (root === null || root === node) {
      return depth;
    } if (root.data < node.data) {
      depth += 1;
      return getDepth(root.right, node, depth);
    }
    depth += 1;
    return getDepth(root.left, node, depth);
  };

  /* A balanced tree is one where the difference between heights of left subtree and right
  subtree of every node is not more than 1. */
  const isBalanced = (root) => {
    if (root === null) {
      return true;
    }

    const lh = getHeight(root.left);
    const rh = getHeight(root.right);

    if (Math.abs(lh - rh) <= 1 && isBalanced(
      root.left,
    ) === true && isBalanced(root.right) === true) {
      return true;
    }

    return false;
  };

  /* Pass an in order array, which is gotten from unbalanced tree with breath-first traversal,
  build balanced tree from new array */
  const rebalance = (root) => {
    const levelOrderArr = levelOrder(root);
    const arrayEnd = levelOrderArr.length - 1;
    root = buildTree(levelOrderArr, 0, arrayEnd);

    return root;
  };

  // This method is used to display the tree in the console
  const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

  return {
    buildTree,
    prettyPrint,
    searchTree,
    insertKey,
    deleteKey,
    levelOrder,
    preOrder,
    inOrder,
    postOrder,
    getHeight,
    getDepth,
    isBalanced,
    rebalance,
  };
};

function randomArray(arrayLen) {
  let i = 0;
  const numArray = [];
  while (i < arrayLen) {
    const randomNum = Math.floor((Math.random() * 1000) + 1);
    numArray.push(randomNum);
    i += 1;
  }
  return [...new Set(numArray)];
}

function insertRandomNumbers(root, quantity) {
  let i = 0;
  while (i < quantity) {
    const randomNum = Math.floor((Math.random() * 1000) + 1);
    binaryTree.insertKey(root, randomNum);
    i += 1;
  }
}

// My test area ;)
const binaryTree = Tree();
const treeArray = randomArray(100);
const endOfArray = treeArray.length - 1;
let root = binaryTree.buildTree(mergeSort(treeArray), 0, endOfArray);
insertRandomNumbers(root, 20);
// binaryTree.insertKey(root, 22);
// binaryTree.insertKey(root, 23);
// binaryTree.deleteKey(root, 22);
// binaryTree.prettyPrint(root);
// console.log(binaryTree.getHeight(binaryTree.searchTree(root, 8)));
// console.log(binaryTree.getDepth(root, binaryTree.searchTree(root, 16)));
console.log(binaryTree.isBalanced(root));
root = binaryTree.rebalance(root);
binaryTree.prettyPrint(root);
console.log(binaryTree.isBalanced(root));

// console.log(binaryTree.levelOrder(root));
// console.log(binaryTree.preOrder(root));
// console.log(binaryTree.inOrder(root));
// console.log(binaryTree.postOrder(root));
