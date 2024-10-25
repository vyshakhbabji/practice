function pow(x, n) {

    if( n === 0 ) return 1 //base case
    let res= 1
    if(n < 0 ){
        x = 1/x
        n = -n
    }

    while(n>0){
        if(n%2===1){
            res*=x
        }
        x *= x
        n = Math.floor(n/2)
    }

    return res
}

// test

console.log(pow(2, 3)); // 8
console.log(pow(2, 4)); // 16
console.log(pow(2, -3)); // 0.125
console.log(pow(2, 0)); // 1
console.log(pow(2, 1)); // 2
console.log(pow(2, 2)); // 4

// Time complexity: O(log n) where n is the power