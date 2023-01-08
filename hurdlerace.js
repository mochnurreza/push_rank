function hurdleRace(k, height) {
    let tallest = height[0]
    for(let i = 0; i < height.length; i++){
        if(height[i] > tallest){
            tallest = height[i]
        }   
    }
    if(tallest > k){
        return tallest - k
    } else {
        return 0
    }
}