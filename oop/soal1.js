// Soal:
// Buatlah kelas Book dengan properti:

// Judul (title)
// Penulis (author)
// Tahun Terbit (year)
// Metode untuk mendapatkan informasi buku (getBookInfo)
// Buatlah dua objek buku menggunakan kelas Book.

// Definisikan kelas Book
class Book {
    constructor(title, author, year) {
      this.title = title;
      this.author = author;
      this.year = year;
    }
  
    // Metode untuk mendapatkan informasi buku
    getBookInfo() {
      return `${this.title} oleh ${this.author}, diterbitkan pada tahun ${this.year}`;
    }
  }
  
  // Buat dua objek buku
  const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
  
  // Tampilkan informasi buku
  console.log(book1.getBookInfo());
  console.log(book2.getBookInfo());
  