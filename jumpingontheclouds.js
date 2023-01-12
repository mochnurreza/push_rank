function jumpingOnClouds(c, k) {
  let energy = 100;
  let temp = 0

  for (let i = 1; i < c.length; i++) {
    if((i * c.length) % k === 0){
        temp = ((i * c.length) / k)
        break
    }   
}
console.log(temp)
let j = k
console.log(j)
for(let i = 0; i < temp; i++){
    if(j >= c.length){
        j = j - c.length
    }

    if(c[j] === 1){
        energy -= 3
    } else {
        energy--
    }
    j += k
}
  return energy
}

const result = jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3);
console.log(result);
