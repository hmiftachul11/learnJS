function printReversePyramid(rows) {
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
      pattern += ' '.repeat(i - 1);
      pattern += '*'.repeat(2 * (rows - i) + 1);
      pattern += '\n';
    }
    console.log(pattern);
  }
  
  printReversePyramid(5);
  