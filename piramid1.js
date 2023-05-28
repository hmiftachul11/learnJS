function printPyramid(baris) {
    for (let i = 0; i < baris; i++) {
      let pola = '';
      for (let j = 0; j < baris - i - 1; j++) {
        pola += ' ';
      }
      for (let k = 0; k <= i; k++) {
        pola += '* ';
      }
      console.log(pola);
    }
  }
  
  printPyramid(5);  