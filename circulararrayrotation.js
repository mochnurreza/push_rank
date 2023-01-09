function circularArrayRotation(a, k, queries) {
    // Write your code here
    const rotation = [...a]
    for(let i = 0; i < k; i++){
        rotation.unshift(rotation.pop())
    }
    return queries.map(el => rotation[el])
}
const result = circularArrayRotation([3,4,5], 2, [1,2])
console.log(result)