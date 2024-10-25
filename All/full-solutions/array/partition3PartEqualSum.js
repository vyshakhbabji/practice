function canThreePartsEqualSum(arr) {
    const totalSum = arr.reduce((a,b)=>a+b , 0)
    console.log(totalSum)

    const targetSum = totalSum/3
    let curSum =0
    let partsFound = 0

    for(let n of arr){
        curSum+=n

        if(curSum===targetSum){
            curSum=0
            partsFound++
        }

        if(partsFound===3) return true

    }
    return false
}

// Example input
const arr = [0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1];
console.log(canThreePartsEqualSum(arr)); // Output should be true

// Additional test case
const arr2 = [1, -1, 1, -1];
console.log(canThreePartsEqualSum(arr2)); // Output should be false


const arr3 = [1, -1, 1, -1];
console.log(canThreePartsEqualSum(arr3)); // Output should be false