function saveThePrisoner(n, m, s) {
    // Write your code here
   let result = (s + m - 1) % n
   return result == 0 ? n : result
}
const hasil = saveThePrisoner(3, 7, 3)
console.log(hasil)