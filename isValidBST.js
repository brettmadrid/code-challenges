class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// function DFSInOrder(node) {
//   var data = [];
//   function traverse(node) {
//     // keep going left until at last leftmost leaf
//     if (node.left) traverse(node.left);
//     data.push(node.value);
//     if (node.right) traverse(node.right);
//   }
//   traverse(node);
//   return data;
// }

// function isValidBST(root) {
//   const bstArr = DFSInOrder(root);
//   console.log(bstArr);
//   for (let i = 0; i < bstArr.length; i++) {
//     if (bstArr[i] > bstArr[i + 1]) return false;
//   }
//   return true;
// }

var isValidBST = function (node) {
  if (node === null) return true;

  let data = [];

  function traverse(node) {
    if (node.left) traverse(node.left);

    data.push(node.value);

    if (node.right) traverse(node.right);
  }

  traverse(node);

  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] > data[i + 1]) return false;
  }

  return true;
};

let rNode = new Node(1);
rNode.left = new Node(1);

console.log(isValidBST(rNode));
