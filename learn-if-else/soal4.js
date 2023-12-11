// 2. Penentuan Angka:

// Buat program yang meminta pengguna memasukkan sebuah angka. 
// Jika angka tersebut positif, tampilkan pesan "Angka positif". 
// Jika angka tersebut negatif, tampilkan pesan "Angka negatif". 
// Jika angka tersebut nol, tampilkan pesan "Nol". 
// Terus minta angka lagi sampai pengguna memasukkan nilai yang valid.

function InputNumber() {
    let tryNumber = true;
    
    while (tryNumber) {
        let number = prompt('Masukkan Angka:')
        let numberStr = parseInt(number)

        if(!isNaN(numberStr)){
            let message = ''
            if(numberStr == 0){
                message = "Nol"
            } else if(numberStr >= 0) {
                message = "Angka Positif"
            } else {
                message = 'Angka Negatif'
            }
            alert(`${message}`) 
        } else {
            alert('Inpus Bukan Angka. Silahkan Coba Lagi!')
        }
        
        tryNumber = confirm('Coba lagi?')
    }
    alert('terimakasih')
}

InputNumber()