// Pemeriksaan Bilangan:
// a. Buatlah program JavaScript yang meminta pengguna memasukkan sebuah bilangan. Kemudian,
// program akan menampilkan pesan apakah bilangan tersebut positif, negatif, atau nol.
// b. Modifikasi program di atas agar menampilkan pesan apakah bilangan tersebut genap atau ganjil.

function cekBilangan() {
  let tryAgain = true;

  while (tryAgain) {
    let check = prompt("Masukkan Angka:");

    // Mengonversi input ke tipe data number
    const checkData = parseFloat(check);

    if (!isNaN(checkData)) {
      // Memeriksa apakah input adalah angka
      let message = "";

      if (checkData >= 0) {
        if (checkData === 0) {
          message = "bilangan 0";
        } else if (checkData % 2 === 0) {
          message = "bilangan genap";
        } else {
          message = "ganjil";
        }
      } else {
        message = "bilangan negatif";
      }

      // Menampilkan hasil dengan alert
      alert(`Hasil: ${message}`);

      // Menanyakan apakah pengguna ingin mencoba lagi
      tryAgain = confirm("Apakah Anda ingin mencoba lagi?");
    } else {
      alert("Input bukan angka. Silakan coba lagi.");
    }
  }

  alert("Terima kasih! Program berhenti.");
}

// Memanggil fungsi untuk pertama kali
cekBilangan();
