function libraryFine(d1, m1, y1, d2, m2, y2) {
    // Write your code here
    if(y1 > y2){
        return 10000
    } else if(y1 == y2){
        if(m1 > m2){
            return 500 * (m1-m2)
        } else if(m1 == m2){
            if(d1 > d2){
                return 15 * (d1 - d2)
            } else {
                return 0
            }
        } else {
            return 0
        }
    } else {
        return 0
    }
}

console.log(libraryFine(9, 6, 2015, 6, 6, 2015));