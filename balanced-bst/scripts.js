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
      console.log('Key not found');
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
  };
};

const binaryTree = Tree();
const treeArray = [1, 4, 6, 7, 2, 9, 11, 8, 5, 14];
const endOfArray = treeArray.length - 1;
const root = binaryTree.buildTree(mergeSort(treeArray), 0, endOfArray);
binaryTree.insertKey(root, 15);
binaryTree.insertKey(root, 16);
binaryTree.insertKey(root, 21);
binaryTree.deleteKey(root, 21);
binaryTree.prettyPrint(root);
