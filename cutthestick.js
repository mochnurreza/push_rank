function cutTheSticks(arr) {
    // Write your code here
    let result = []
    while (arr.length > 0) {
        result.push(arr.length)
        let min = Math.min(...arr)
        arr = arr.filter(el => el > min)
    }
    return result
}
console.log(cutTheSticks([5, 4, 4, 2, 2, 8]));