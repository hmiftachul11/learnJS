// Buatlah program JavaScript yang meminta pengguna memasukkan sebuah bilangan bulat positif, 
// dan kemudian menghitung dan menampilkan faktorial dari bilangan tersebut. 
// Faktorial dari sebuah bilangan n (dilambangkan sebagai n!) didefinisikan sebagai hasil perkalian semua bilangan bulat positif dari 1 hingga n.

// Contoh:

// - Jika pengguna memasukkan 5, program harus menghitung 5!=5×4×3×2×1=120 dan menampilkannya.
    
//     5!=5×4×3×2×1=120
    
// - Jika pengguna memasukkan 0, hasilnya harus 1 (berdasarkan definisi faktorial).

// Pastikan untuk menangani input yang tidak valid dan berikan pesan yang sesuai kepada pengguna.

function programFaktorial() {
    let tryFactorialProgram = true;

    while(tryFactorialProgram){
        let inputFaktorial = prompt('Masukkan angka untuk Program Faktoral ini:')
        let inputFaktorialStr = parseInt(inputFaktorial)
        if(!isNaN(inputFaktorialStr)){
            let jumlahHasilFaktorial = 1
            for(let i = inputFaktorialStr; i >= 1; i--){
                jumlahHasilFaktorial *= i
            }
            alert(`Hasil Faktorial dari ${inputFaktorial} adalah ${jumlahHasilFaktorial}`)
        } else {
            alert('Input Bukan Angka')
        }
        tryFactorialProgram = confirm('Ingin mengulang program?')
    }
    alert('Terimakasih!')
}

programFaktorial()