// Buatlah program JavaScript yang meminta pengguna memasukkan password.
// Jika password yang dimasukkan sesuai dengan password yang sudah ditentukan (misalnya "rahasia"),
// tampilkan pesan "Password benar". Jika password salah, tampilkan pesan "Password salah".
// Setelah itu, tanyakan kepada pengguna apakah dia ingin mencoba lagi.
// Jika jawabannya ya, minta password lagi; jika tidak, akhiri program.

function cekPass() {
  const password = "rahasia";
  let tryInputPass = true;

  while (tryInputPass) {
    let input = prompt("Masukkan Password Anda:").toString()

    if (typeof input === 'string') {
      let pesan = "";
      if (input === password) {
        pesan = "Password Anda Benar!";
      } else {
        pesan = "Password Anda Salah!";
      }
      alert(`Pesan: ${pesan}`);
      tryInputPass = confirm("Coba lagi?");
    } else {
      alert("Input bukan string. Silakan coba lagi");
    }
  }
  alert("Terima kasih! Program berhenti.");
}

cekPass();
