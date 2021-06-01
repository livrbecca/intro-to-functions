function isEqual(a,b){
    if (a === b){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
// test cases
console.log('4 and 4 should return true', isEqual(4,4))
console.log('0 and 0 should return true', isEqual(0,0))
console.log('-4 and -4 should return true', isEqual(-4,-4))
console.log('4 and -4 should return false', isEqual(4,-4))
console.log('0 and 1 should return false', isEqual(0,1))