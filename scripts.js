const Node = (nodeValue = null, nextnode = null) => {
  const value = nodeValue;
  const nextNode = nextnode;

  return { value, nextNode };
};

const linkedList = () => {
  const List = [];

  const getSize = () => List.length;

  const append = (value) => {
    List.push(Node(value));
    if (getSize() >= 2) {
      List[getSize() - 2].nextNode = List[getSize() - 1];
    }
  };

  const prepend = (value) => {
    /* nextNode has been set to the first item in array, because Node will only be inserted after
    line execution. */
    List.unshift(Node(value, List[0]));
  };

  const insertAt = (value, index) => {
    if (index === getSize() - 1) {
      console.error('Please use append method, node not inserted!');
      return;
    } if (index === 0) {
      console.error('Please use prepend method, node not inserted!');
      return;
    }
    /* At the line below nextNode is set to List[index], which is the same node that needs to be
    inserted, because the insertion of the node happens after the exection of the line */
    List.splice(index, 0, Node(value, List[index]));
    /* Here we set the nextNode for the Node before the newly inserted Node to be List[index],
    which is the same as above. Here the new Node has already been inserted, at the time of line
    execution. */
    List[index - 1].nextNode = List[index];
  };

  const getHead = () => List[0];

  const getTail = () => List[List.length - 1];

  const getAtIndex = (index) => List[index];

  const removeLast = () => List.pop(-1);

  const contains = (value) => {
    const listitem = List.find((listItem) => listItem.value === value);
    if (listitem === undefined) {
      return false;
    }
    return true;
  };

  const findItem = (value) => {
    const listitem = List.find((listItem) => listItem.value === value);
    if (listitem === undefined) {
      return 'Item not found';
    }
    return List.indexOf(listitem);
  };

  const listToString = () => {
    let listStringify = '';
    List.forEach((listItem) => {
      listStringify += `(${listItem.value}) => `;
      if (listItem.nextNode === null) {
        listStringify += 'null';
      }
    });
    return listStringify;
  };

  return {
    append,
    prepend,
    getSize,
    getHead,
    getTail,
    getAtIndex,
    removeLast,
    findItem,
    listToString,
    contains,
    insertAt,
  };
};

const LinkedListOne = linkedList();

LinkedListOne.append('New node 3');
LinkedListOne.append('New node 4');
LinkedListOne.prepend('New node 2');
LinkedListOne.prepend('New node 1');
LinkedListOne.append('New node 5');
LinkedListOne.append('New node 6');
LinkedListOne.prepend('New node 0');

console.log(LinkedListOne.getSize());
console.log(LinkedListOne.getHead());
console.log(LinkedListOne.getTail());
console.log(LinkedListOne.findItem('New node 5'));
console.log(LinkedListOne.contains('New node 3'));
LinkedListOne.insertAt('Inserted node', 4);
console.log(LinkedListOne.getAtIndex(2));
console.log(LinkedListOne.listToString());
