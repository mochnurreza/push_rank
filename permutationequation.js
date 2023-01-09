function permutationEquation(p) {
    // Write your code here
    return p.map((x, i) => p.indexOf(p.indexOf(i + 1) + 1) + 1)
}
const hasil = permutationEquation([5,2,1,3,4])
console.log(hasil)