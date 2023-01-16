function nonDivisibleSubset(k, s) {
    // Write your code here
    let temp = new Array(k).fill(0)
    for(let i = 0; i < s.length; i++){
        temp[s[i] % k]++
    }
   let maxSize = 0
   if(temp[0] > 0) maxSize++

   for(let i = 1; i <= k/2; i++){
    if( i !== k - i){
        maxSize += Math.max(temp[i], temp[k - i])
    }
   }
   if(k % 2 === 0 && temp[k/2] > 0) maxSize++

   return maxSize
}
console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));