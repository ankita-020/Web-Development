/**********
 * Design Linked List
 *  - Create a node
 *  - Initializing LinkedList which is represented by its head
 */

// Create a node
function Node(val) {
  this.val = val;
  this.next = null;
}

let newNode = new Node(5);

// Initializing a Linked List
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  let curr = this.head;
  if (curr == null) {
    this.head = newNode;
  } else {
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (index, val) {
  let newNode = new Node(val);
  let curr = this.head;

  if (index < 0 || index > this.size) return;

  if (index === 0) {
    this.addAtHead(val);
    return;
  } else if (index === this.size) {
    this.addAtTail(val);
    return;
  } else {
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.get = function (index) {
  let curr = this.head;
  console.log("index", index, "size", this.size);

  if (index < 0 || index >= this.size) return -1;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }
  return curr.val;
};

MyLinkedList.prototype.deleteAt = function (index) {
  let curr = this.head;

  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
  } else {
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }

    curr.next = curr.next.next;
  }

  this.size--;
};

let newList = new MyLinkedList();
newList.addAtHead(10);
newList.addAtIndex(1, 11);
newList.addAtIndex(2, 12);
newList.addAtIndex(3, 13);
newList.addAtIndex(4, 14);
newList.addAtIndex(5, 15);

function middleOfLinkedList(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

//console.log(middleOfLinkedList(newList.head));

function reverseLinkedList(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  head = prev;
  return head;
}

//console.log(reverseLinkedList(newList.head));

function isCyclicLinkedList(head) {
  // T - O(n); S - O(n)
  let curr = head;
  let set = new Set();

  while (curr) {
    if (set.has(curr.val)) return true;

    set.add(curr.val);
    curr = curr.next;
  }
  return false;
}

// console.log(isCyclicLinkedList(newList.head));

function isCyclicLinkedListUsingFloydAlgo(head) {
  // T - O(n); S - O(1)
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next == null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}

function isPalindrome(head) {
  // Find the middle of list
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse second half of list
  let curr = slow;
  let prev = null;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Check from the beginning and end if values are equal
  let start = head;
  let end = prev;
  while (end) {
    if (start.val !== end.val) return false;
    start = start.next;
    end = end.next;
  }

  return true;
}

let palindromeList = new MyLinkedList();
palindromeList.addAtHead(1);
palindromeList.addAtIndex(1, 2);
palindromeList.addAtIndex(2, 3);
palindromeList.addAtIndex(3, 3);
palindromeList.addAtIndex(4, 2);
palindromeList.addAtIndex(5, 1);

//console.log(isPalindrome(palindromeList.head));

function isIntersectedList(headA, headB) {
  let set = new Set();
  let currB = headB;

  while (currB) {
    set.add(currB.val);
    currB = currB.next;
  }

  let currA = headA;
  while (currA) {
    if (set.has(currA.val)) return currA;

    currA = currA.next;
  }
  return null;
}

let firstIntersectedList = new MyLinkedList();
let secondIntersectedList = new MyLinkedList();

firstIntersectedList.addAtHead("a1");
firstIntersectedList.addAtIndex(1, "a2");
firstIntersectedList.addAtIndex(2, "c1");
firstIntersectedList.addAtIndex(3, "c2");
firstIntersectedList.addAtIndex(4, "c3");
secondIntersectedList.addAtHead("b1");
secondIntersectedList.addAtIndex(1, "b2");
secondIntersectedList.addAtIndex(2, "b3");
secondIntersectedList.addAtIndex(3, "c1");
secondIntersectedList.addAtIndex(4, "c2");

// console.log(
//   isIntersectedList(firstIntersectedList.head, secondIntersectedList.head)
// );

function removeElements(head, target) {
  let sentinelNode = new Node();
  sentinelNode.next = head;
  let prev = sentinelNode;

  while (prev && prev.next) {
    if (prev.next.val === target) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinelNode.next;
}

//console.log(removeElements(newList.head, 14));

function removeNthElementsFromEnd(head, n) {
  // Create a sentinel node to handle corner cases
  let sentinelNode = new Node();
  sentinelNode.next = head;

  // Find the size of linked list
  let curr = head;
  let size = 0;
  while (curr) {
    curr = curr.next;
    size++;
  }

  // Find position from beginning
  let deletePos = size - n + 1;
  let prevPos = deletePos - 1;
  let prev = sentinelNode;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;

  return sentinelNode.next;
}

function removeNthElementsFromEndOnePass(head, n) {
  // Add sentinel node
  let sentinelNode = new Node();
  sentinelNode.next = head;

  let secondPointer = sentinelNode;
  let firstPointer = sentinelNode;

  // Move firstpointer n steps ahead
  for (let i = 0; i < n; i++) {
    firstPointer = firstPointer.next;
  }

  // Move both pointers until firstpointer reaches last node
  while (firstPointer.next) {
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
  }

  // Delete element which is next to secondpointer
  let prev = secondPointer;
  prev.next = prev.next.next;

  return sentinelNode.next;
}

// console.log(removeNthElementsFromEndOnePass(newList.head, 2));
// console.log(newList.get(4));
