function printReversePyramid(rows) {
    for (let i = 0; i < rows; i++) {
      let pattern = '';
      for (let j = 0; j < i; j++) {
        pattern += ' ';
      }
      for (let k = 0; k < rows - i; k++) {
        pattern += '* ';
      }
      console.log(pattern);
    }
  }
  
  printReversePyramid(5);
  