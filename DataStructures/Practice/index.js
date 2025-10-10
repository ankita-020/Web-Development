function findIndex(array, predicate, fromIndex = 0) {
  const length = array.length;
  const startIndex =
    fromIndex >= 0 ? fromIndex : Math.max(length + fromIndex, 0);

  for (let index = startIndex; index < length; index++) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }

  return -1;
}

// const a = findIndex([5, 12, 8, 130, 44], (num) => num % 2 === 0, -2);
// console.log(a);

function findLastIndex(array, predicate, fromIndex = array.length - 1) {
  let arr = [1, 2, 3, 4, 5];
  const length = array.length;
  const lastIndex =
    fromIndex >= 0 ? fromIndex : Math.min(fromIndex + length, 0);
  console.log(lastIndex);
  for (let i = lastIndex; i >= 0; i--) {
    if (predicate(array[i])) {
      return i;
    }
  }
  return -1;
}

// const a = findIndex([1, 2, 3, 4, 5], (value) => value > 2);
// console.log(a);

function maxBy(array, iteratee) {
  const length = array.length;
  let max = -Infinity;
  let result;

  if (array.length === 0) return;

  for (let i = 0; i < length; i++) {
    let val = iteratee(array[i]);

    if (val) {
      if (val > max) {
        max = iteratee(array[i]);
        result = array[i];
      }
    } else {
      return;
    }
  }
  return result;
}

const a = maxBy([{ n: 1 }, { n: 2 }], (o) => o.n);
console.log(a);
