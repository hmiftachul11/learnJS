function printPyramid(baris) {
    let pola = '';
    for (let i = 1; i <= baris; i++) {
      let spasi = ' '.repeat(baris - i);
      let bintang = '* '.repeat(i);
      pola += spasi + bintang + '\n';
    }
    console.log(pola);
  }
  
  printPyramid(5);
  