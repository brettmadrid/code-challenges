class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(0);

const isPalindrome = (l) => {
  intArr = [];

  if (l === null || l.next === null) return true;

  let curr = l.head;
  while (curr !== null) {
    intArr.push(curr.value);
    curr = curr.next;
  }

  let i = 0;
  let j = intArr.length - 1;

  for (i; i < j; i++) {
    if (intArr[i] !== intArr[j]) return false;
    j--;
  }
  return true;
};

console.log(isPalindrome(list));

// const isPalindrome = str => {
// ltrArray = [];
// revString = '';
// // using stack methods push each letter into an array
// // then use pop to pop off the stack from the array
// // pop into the revString
// for (let i = 0; i < str.length; i++) {
//     ltrArray.push(str[i]);
// }

// // can't use ltrArray.length because as items are popped off
// // the size of the array changes.
// for (let j = 0; j < str.length; j++) {
//     revString += ltrArray.pop();
// }
// console.log(revString)
// if (revString === str) {
//     console.log(str + ' is a palindrome');
// } else {
//     console.log(str + ' is not a palindrome');
// }

// console.log(isPalindrome("racecar"));
