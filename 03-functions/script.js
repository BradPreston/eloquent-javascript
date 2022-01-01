// ========================================
// minimum ==============================
// ====================================
const min = (num1, num2) => (num1 < num2 ? num1 : num2);

// ========================================
// recursion ============================
// ====================================
const isEven = num => {
  if (num === 0) return true;
  else if (num === 1) return false;
  else if (num < 0) return isEven(-num);
  else return isEven(num - 2);
};

// ========================================
// bean counting ========================
// ====================================
const countBs = str => {
  return countChars(str, 'B');
};

const countChars = (str, letter) => {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) total++;
  }
  return total;
};
