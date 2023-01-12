function findDigits(n) {
    // Write your code here
    let digit = ("" + n).split('')
   
    let counter = 0

    for(let i = 0; i < digit.length; i++){
        if(n % digit[i] === 0){
            counter++
        }
    }
    return counter
}

const result = findDigits(1012)
console.log(result)