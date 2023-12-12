// Soal:
// Buatlah kelas Shape untuk merepresentasikan bentuk geometris. Kelas ini harus memiliki properti:

// nama (string) : Nama bentuk geometris (contoh: "Persegi", "Lingkaran").
// warna (string) : Warna bentuk geometris.
// Buatlah dua kelas anak (Square dan Circle) yang mewarisi kelas Shape:

// Kelas Square harus memiliki tambahan properti:

// sisi (number) : Panjang sisi persegi.
// Metode untuk menghitung luas (calculateArea).
// Kelas Circle harus memiliki tambahan properti:

// radius (number) : Jari-jari lingkaran.
// Metode untuk menghitung luas (calculateArea).
// Buat objek dari masing-masing kelas (Shape, Square, dan Circle) dan tampilkan informasi bentuk geometris beserta luasnya.

// Kelas induk (Shape)
class Shape {
    constructor(nama, warna) {
      this.nama = nama;
      this.warna = warna;
    }
  
    // Metode untuk mendapatkan informasi bentuk geometris
    getInfo() {
      return `Bentuk: ${this.nama}, Warna: ${this.warna}`;
    }
  }
  
  // Kelas anak pertama (Square)
  class Square extends Shape {
    constructor(sisi, warna) {
      super("Persegi", warna);
      this.sisi = sisi;
    }
  
    // Metode untuk menghitung luas
    calculateArea() {
      return this.sisi * this.sisi;
    }
  }
  
  // Kelas anak kedua (Circle)
  class Circle extends Shape {
    constructor(radius, warna) {
      super("Lingkaran", warna);
      this.radius = radius;
    }
  
    // Metode untuk menghitung luas
    calculateArea() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  // Membuat objek dari masing-masing kelas
  const bentuk1 = new Shape("Bentuk Abstrak", "Putih");
  const persegi1 = new Square(5, "Merah");
  const lingkaran1 = new Circle(3, "Biru");
  
  // Menampilkan informasi dan luas bentuk geometris
  console.log(bentuk1.getInfo());
  console.log(`Luas Persegi: ${persegi1.calculateArea()}`);
  console.log(`Luas Lingkaran: ${lingkaran1.calculateArea()}`);
  