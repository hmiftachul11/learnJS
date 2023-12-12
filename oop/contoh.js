// Soal:
// Buatlah kelas Book dengan properti:

// Judul (title)
// Penulis (author)
// Tahun Terbit (year)
// Metode untuk mendapatkan informasi buku (getBookInfo)
// Buatlah dua objek buku menggunakan kelas Book.

class Book {
  constructor(title, author, tahun) {
    this.title = title;
    this.author = author;
    this.tahun = tahun;
  }
  getInfoBook() {
    return `Judul Buku adalah ${this.title} dikarang oleh ${this.author}, diterbitkan tahun ${this.tahun}`;
  }
}

const book1 = new Book("Habbits", "Felix Siaw", 2018);
const book2 = new Book("Bodoamat", "Tachul", 2023);

console.log(book1.getInfoBook());
console.log(book2.getInfoBook());

// Contoh 2
class Contoh {
  constructor() {
    this.data = "Hello";
  }

  contohMetode(argumen) {
    return this.data + " " + argumen;
  }
}

const contohObjek = new Contoh();
console.log(contohObjek.contohMetode("World"));

//   Contoh 3
function tambah(a, b) {
  return a + b;
}

// Test case dengan argumen
console.log(tambah(2, 3)); // Seharusnya mengembalikan 5

//   Contoh 4
// Kelas yang Memiliki Metode Bergantung pada Properti atau Parameter:
class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  hitungLuas() {
    return this.panjang * this.lebar;
  }
}

// Test case dengan argumen
const persegiPanjangTest = new PersegiPanjang(4, 5);
console.log(persegiPanjangTest.hitungLuas()); // Seharusnya mengembalikan 20

// Contoh 5
// Fungsi/Metode yang Bergantung pada Keadaan (State):
class Counter {
  constructor() {
    this.count = 0;
  }

  tambah(angka) {
    this.count += angka;
  }
}

// Test case dengan argumen
const counterTest = new Counter();
counterTest.tambah(5);
console.log(counterTest.count); // Seharusnya mengembalikan 5

// Contoh 6
// Fungsi/Metode yang Menerima Callback:
function operasiAsync(angka, callback) {
  setTimeout(() => {
    const hasil = angka * 2;
    callback(hasil);
  }, 1000);
}

// Test case dengan argumen
operasiAsync(3, (hasil) => {
  console.log(hasil); // Seharusnya mengembalikan 6
});
