// Manipulasi Array:
// Buatlah sebuah fungsi yang menerima parameter berupa array bilangan bulat, 
// lalu mengembalikan array baru yang berisi nilai kuadrat dari setiap elemen array input.

function kuadratArray(inputArray) {
    // Membuat array baru yang akan menyimpan nilai kuadrat
    let hasilKuadrat = [];

    // Iterasi melalui setiap elemen array input dan menghitung nilai kuadratnya
    for (let i = 0; i < inputArray.length; i++) {
        const result = inputArray[i] ** 2;
        hasilKuadrat.push(result);
    }

    // Mengembalikan array baru yang berisi nilai kuadrat dari setiap elemen array input
    return hasilKuadrat;
}

// Contoh penggunaan fungsi
let inputArray = [1, 2, 3, 4, 5];
let resultArray = kuadratArray(inputArray);
console.log(resultArray);



