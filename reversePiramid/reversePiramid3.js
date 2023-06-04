function printReversePyramid(rows) {
    for (let i = rows; i >= 1; i--) {
      let pattern = '';
      for (let j = rows - i; j > 0; j--) {
        pattern += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        pattern += '*';
      }
      console.log(pattern);
    }
  }
  
  printReversePyramid(5);
  