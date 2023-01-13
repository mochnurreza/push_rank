function appendAndDelete(s, t, k) {
    // Write your code here
    let commonLength = 0
    for(let i = 0; i < Math.min(s.length, t.length); i++){
        if(s[i] === t[i]){
            commonLength++
        } else {
            break
        }
    }
    let totalOpertaion = s.length + t.length - 2 * commonLength

    if(k >= totalOpertaion && (k - totalOpertaion) % 2 == 0){
        return 'YES'
    } else if(k >= s.length + t.length){
        return 'YES'
    } else {
        return 'NO'
    }
}
const result = appendAndDelete()
