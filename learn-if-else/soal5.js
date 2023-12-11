function hitungJumlahBilanganGenap() {
    let tryCekBilgen = true

    while(tryCekBilgen){

    let input = prompt('Masukkan Angka:')
    let inputStr = parseInt(input)

    if(!isNaN(inputStr)){
        let jumlahkan = 0;
        for(let i = 1; i <= inputStr; i++){
            if(i % 2 === 0){
                jumlahkan++
            }
        }
        alert(`Input angka dari 1 hingga ${inputStr} adalah ${jumlahkan}`)
    } else {
        alert('input Anda bukan angka')
    }
    tryCekBilgen = confirm('coba lagi?')
    }
    alert('Terima Kasih!')
}

hitungJumlahBilanganGenap()