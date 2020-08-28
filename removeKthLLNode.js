class Node {
  constructor(val) {
    this.val = val;
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
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(20);
list.push(19);
list.push(18);
list.push(17);
list.push(16);
list.push(15);
list.push(14);
list.push(13);
list.push(12);
list.push(11);

function removeKthLinkedListNode(head, k) {
  let current = head;
  let length = 0;

  // first determine length of the LL
  while (current) {
    current = current.next;
    length++;
  }

  // test for k being invalid
  if (k < 0 || k > length) return head;

  current = head;

  // if k is = equal to the LL length, delete head
  if (k === length) {
    head = current.next;
  } else {
    // traverse to the node just before the one to be deleted
    for (let i = 0; i < length - k - 1; i++) current = current.next;

    // rearrange pointers
    let nodeToDelete = current.next;
    current.next = nodeToDelete.next;
    nodeToDelete.next = null;
  }

  return head;
}

removeKthLinkedListNode(list, 4);

function printLL(head) {
  let current = head;
  while (current) {
    console.log(current.val);
    current = current.next;
  }
}

printLL(list);
