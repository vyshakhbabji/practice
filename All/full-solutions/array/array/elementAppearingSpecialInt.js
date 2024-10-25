function findSpecialInteger(arr) {


    // so if the conditionn for finding the char is true num at i should be equal to num at i+threshold ..
    // ps: array is sorted
    // for eg: thres =3  [1.2,2,4,4,4,5,5,]  i+thres would comapre 3 value block at a time as array is sorted

    let thres = Math.floor (arr.length * 0.25)

    for (let i = 0 ; i < arr.length - thres ; i ++){
        if(arr[i] === arr[i+thres]) 
            return arr[i]
    } 

    return -1

}

// Example input
const arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];
console.log(findSpecialInteger(arr)); // Output should be 6

// Additional test cases
const arr2 = [1, 1, 2, 2, 2, 2, 3, 3];
console.log(findSpecialInteger(arr2)); // Output should be 2

const arr3 = [1, 1, 1, 1, 2, 3, 4, 5];
console.log(findSpecialInteger(arr3)); // Output should be 1
