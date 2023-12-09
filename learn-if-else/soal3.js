// 1. Pemeriksaan Umur:

// Buatlah program yang meminta pengguna memasukkan usia.
// Jika usia yang dimasukkan lebih dari atau sama dengan 18,
// tampilkan pesan "Anda dewasa". Jika usia di bawah 18,
// tampilkan pesan "Anda masih anak-anak".
// Terus minta usia lagi sampai pengguna memasukkan nilai yang valid (angka positif).

function cekUmur() {
  let tryUmur = true;

  while (tryUmur) {
    let umur = prompt("Masukkan umur:");
    let umurStr = parseInt(umur);
    let pesan = "";
    if (!isNaN(umurStr) && umurStr >= 0) {
      if (umurStr >= 18) {
        pesan = "Anda Dewasa";
      } else {
        pesan = "Anda masih Anak-anak";
      }
      alert(`${pesan}`);
    } else {
      alert("Input tidak valid. Harap masukkan angka positif.");
    }
    tryUmur = confirm("coba lagi?");
  }
  alert("Terima Kasih!");
}

cekUmur();
