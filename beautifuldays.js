function beautifulDays(i, j, k) {
    let beautifulDay = 0
    for(let day = i; day <= j; day++){
        const reverse = +day.toString().split('').reverse().join('')
        if(Math.abs(day - reverse) % k == 0){
            beautifulDay++
        }
    }
    return beautifulDay
}
