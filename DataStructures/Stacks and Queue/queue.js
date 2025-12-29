let q = [];

q.push(1); // enqueue
q.push(2);
q.push(3);
q.push(4);

q.shift(); // dequeue

let front = q[0]; // peek/front

// NEVER DO q.pop() or q[2]

/******* Implement queue using stacks **********/
let MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
  this.stack1.push(x);
};

MyQueue.prototype.pop = function () {
  // T - worst case - O(n); average case - O(1)
  let n = this.stack1.length;
  if (this.stack2.length === 0) {
    for (let i = n - 1; i >= 0; i--) {
      this.stack2.push(this.stack1.pop());
    }
  }

  let lastEl = this.stack2.pop();
  return lastEl;
};

MyQueue.prototype.peek = function () {
  if (this.stack2.length === 0) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop);
    }
  }

  return this.stack2[this.stack2.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};
