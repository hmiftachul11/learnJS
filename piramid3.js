function printPyramid(baris) {
    for (let i = 1; i <= baris; i++) {
      let pola = '';
      for (let j = 1; j <= baris - i; j++) {
        pola += ' ';
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        pola += '*';
      }
      console.log(pola);
    }
  }
  
  printPyramid(5);
  