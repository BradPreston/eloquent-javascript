// ========================================
// sum of a range =======================
// ====================================
const range = (start, end, step = 1) => {
  const arr = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) arr.push(i);
  } else {
    for (let i = start; i >= end; i += step) arr.push(i);
  }

  return arr;
};

// ========================================
// reversing an array ===================
// ====================================
const numArr = [1, 2, 3, 4, 5];

const reverseArray = arr => {
  const newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) newArr.push(arr[i]);

  return newArr;
};

const reverseArrayInPlace = arr => {
  const newArr = [];

  for (let i = arr.length; i > 0; i--) newArr.push(i);

  numArr = newArr;
};

// ========================================
// lists ================================
// ====================================
const arr = [1, 2, 3, 4];
const list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: {
        value: 4,
        rest: null
      }
    }
  }
};

const arrayToList = arr => {
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  return list;
};

const listToArray = list => {
  const arr = [];

  for (let node = list; node; node = node.rest) arr.push(node.value);

  return arr;
};

const prepend = (value, list) => {
  return { value: value, rest: list };
};

const nth = (list, index) => {
  const arr = listToArray(list);
  return arr[index];
};

const nthRecursive = (list, index) => {
  if (!list) return undefined;
  else if (index === 0) return list.value;
  else return nthRecursive(list.rest, index - 1);
};

// ========================================
// deep comparison ======================
// ====================================
const deepEqual = (a, b) => {
  if (a === b) return true;
  if (a == null || typeof a != 'object' || b == null || typeof b != 'object')
    return false;

  const keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  keysA.forEach(key => {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  });
};
