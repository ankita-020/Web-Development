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

function removeDuplicatesFromSortedList(head) {
  let curr = head;

  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

let duplicateList = new MyLinkedList();
duplicateList.addAtHead(10);
duplicateList.addAtIndex(1, 10);
duplicateList.addAtIndex(2, 11);
duplicateList.addAtIndex(3, 12);
duplicateList.addAtIndex(4, 12);
duplicateList.addAtIndex(5, 13);
duplicateList.addAtIndex(6, 14);
duplicateList.addAtIndex(7, 14);
// console.log(removeDuplicatesFromSortedList(duplicateList.head));
// console.log(duplicateList.get(2));

function groupOddFollowedByEvenIndices(head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = head.next;
  let evenStart = even;

  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenStart;
  return head;
}

let oddEvenList = new MyLinkedList();
oddEvenList.addAtHead(11);
oddEvenList.addAtIndex(1, 12);
oddEvenList.addAtIndex(2, 13);
oddEvenList.addAtIndex(3, 14);
oddEvenList.addAtIndex(4, 15);
oddEvenList.addAtIndex(5, 16);
oddEvenList.addAtIndex(6, 17);
oddEvenList.addAtIndex(7, 18);

// groupOddFollowedByEvenIndices(oddEvenList.head);
// console.log(oddEvenList.get(1));

function addValuesOfBothList(head1, head2) {
  let carry = 0;
  let curr1 = head1;
  let curr2 = head2;

  let ans = new Node();
  let ansHead = ans;

  while (curr1 || curr2 || carry) {
    let sum = (!curr1 ? 0 : curr1.val) + (!curr2 ? 0 : curr2.val) + carry;
    let carry = sum >= 10 ? 1 : 0; // let carry = Math.floor(sum/10)
    let digit = sum % 10;

    let newNode = new Node(digit);
    ans.next = newNode;
    ans = ans.next;

    curr1 = curr1 && curr1.next;
    curr2 = curr2 && curr2.next;
  }
  return ansHead.next;
}

function mergeTwoSortedLists(l1, l2) {
  let node = new Node();
  let curr = node;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  if (!l1) {
    curr.next = l2;
  }
  if (!l2) {
    curr.next = l1;
  }

  return node.next;
}

let list1 = new MyLinkedList();
let list2 = new MyLinkedList();
list1.addAtHead(1);
list1.addAtIndex(1, 2);
list1.addAtIndex(2, 4);

list2.addAtHead(1);
list2.addAtIndex(1, 3);
list2.addAtIndex(2, 4);

//console.log(mergeTwoSortedLists(list1.head, list2.head));

function rotateListKthTimes(head, k) {
  // corner case
  if (!head || !head.next) return head;
  // Find size of list
  let curr = head;
  let size = 0;
  while (curr) {
    curr = curr.next;
    size++;
  }

  // to avoid unnecessary rotation
  k = k % size;
  if (k === 0) return head;

  // Move fast pointer k steps ahead
  let fast = head;
  let slow = head;
  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  // Reach the end of list
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  let newHead = slow.next;
  slow.next = null;
  fast.next = head;
  head = newHead;

  return head;
}

//console.log(rotateListKthTimes(newList.head, 7));

function swapAdjacentNodes(head) {
  //corner case
  if (!head || !head.next) return head;

  let node = new Node();
  let prev = node;
  let curr = head;

  while (curr && curr.next) {
    prev.next = curr.next;
    let temp = curr.next.next;
    prev.next.next = curr;
    curr.next = temp;

    prev = curr;
    curr = prev.next;
  }
  return node.next;
}

let list = new MyLinkedList();
list.addAtHead(1);
list.addAtIndex(1, 2);
list.addAtIndex(2, 3);
list.addAtIndex(3, 4);
list.addAtIndex(4, 5);
list.addAtIndex(5, 6);

console.log(swapAdjacentNodes(list.head));

function swapAdjacentNodesUsingRecursion() {}
