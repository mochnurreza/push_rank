function extraLongFactorials(n) {
    // Write your code here
    let result = BigInt(1)

    for (let i = BigInt(`${n}`); i > 1; i--) {
        result = result * i;
      }
      console.log(result.toString().replace('n', '')) ;
}

const hasil = extraLongFactorials(45)
console.log(hasil)