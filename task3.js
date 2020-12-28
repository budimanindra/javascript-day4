let randomNumber = 321013203310141
console.log(randomNumber)
let randomStringNumber = randomNumber.toString()
console.log(randomStringNumber)
let splittedNumber = randomStringNumber.split('0')
console.log(splittedNumber)
let arrayNumber=[]

for (let index=0; index<splittedNumber.length; index++) {
    splittedNumberSplit = splittedNumber[index].split('')
    console.log(splittedNumberSplit)
    splittedNumberSplit.sort(function(a, b){return a - b})
    arrayNumber.push(splittedNumberSplit)
}

console.log(arrayNumber)
let finalArray = arrayNumber.join()
console.log(finalArray)
let result = finalArray.replace(/,/g , '')

console.log(parseInt(result))

// algoritma
// 1. merubah semua inputan angka dari tipe data number menjadi string
// 2. dari string tersebut dibuat beberapa array baru setiap menemukan angka 0
// 3. memisahkan setiap elemen dalam setiap array
// 4. mengurutkan setiap elemen dalam setiap array
// 5. menggabungkan setiap elemen ke dalam satu array
// 6. menggabungkan setiap array dan menjadikannya string
// 7. menghapus semua koma yang ada dalam array
// 8. mengubah tipe data dari string ke number