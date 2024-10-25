//outline only

function productOfArrayExceptSelf(arr){

    let leftPrefix = 1
    let rightPrefix = 1

    let res  = Array(arr.length).fill(1)

    for(let i = 0 ; i <arr.length ; i++){
        res[i] *= leftPrefix
        leftPrefix = leftPrefix * arr[i]
    }

    console.log(res)

    for(let i = arr.length-1 ; i>=0; i--){
        res[i] *= rightPrefix
        rightPrefix = arr[i] * rightPrefix
    }

    return res

}

let arr = [1, 2, 3, 4];

console.log(productOfArrayExceptSelf(arr)); // Output: [24, 12, 8, 6]