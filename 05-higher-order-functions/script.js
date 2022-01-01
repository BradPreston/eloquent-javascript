// ========================================
// flattening ===========================
// ====================================
const arr = [[1, 2, 3], [4, 5], [6]];

const flat = arr => arr.reduce((previous, current) => previous.concat(current));

// ========================================
// your own loop ========================
// ====================================
const loop = (start, test, update, body) => {
  for (let i = start; test(i); i = update(i)) {
    body(i);
  }
};

// ========================================
// everything ===========================
// ====================================
const every = (arr, predicate) => {
  for (item of arr) {
    if (!predicate(item)) return false;
  }
  return true;
};

const everyUsingSome = (arr, predicate) => !arr.some(item => !predicate(item));

// ========================================
// dominant writing direction ===========
// ====================================

// This function was taken from the solutions in the book. REVISIT LATER
const dominantWritingDirection = text => {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name != 'none');

  if (counted.length == 0) return 'ltr';

  return counted.reduce((a, b) => (a.count > b.count ? a : b)).name;
};
