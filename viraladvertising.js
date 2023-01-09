function viralAdvertising(n) {
    // Write your code here
    let shared = 5
    let cumulative = 2
    let liked = 2

    for(let i = 2; i <= n; i++){
        shared = liked * 3
        liked = Math.floor(shared / 2)
        cumulative += liked
    }
    console.log('shared--->', shared, 'liked --->', liked)
    return cumulative
}

console.log(viralAdvertising(4))