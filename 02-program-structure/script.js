// ========================================
// looping a triangle ===================
// ====================================
const triangle = () => {
  for (let str = '#'; str.length <= 7; str += '#') console.log(str);
};

// ========================================
// fizz buzz ============================
// ====================================
const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
};

// ========================================
// chessboard ===========================
// ====================================
const chessboard = size => {
  let board = '';
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) board += ' ';
      else board += '#';
    }
    board += '\n';
  }
  console.log(board);
};
