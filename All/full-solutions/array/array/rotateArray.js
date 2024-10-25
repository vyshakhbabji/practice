function rotateArray(arr, k) {

    k = k% arr.length-1

    reverse(arr,0,arr.length-1)
    reverse(arr,0, k)
    reverse(arr,k+1,arr.length-1)

    return arr

}

function reverse(arr, start,end){

    while(start<end){
        [arr[start] , arr[end]] = [arr[end] , arr[start]]
        start++
        end--
    }
}

// Test cases
let arr1 = [1, 2, 3, 4, 5, 6, 7];
let k1 = 3;
console.log(rotateArray(arr1, k1)); // Output: [5, 6, 7, 1, 2, 3, 4]

// let arr2 = [-1, -100, 3, 99];
// let k2 = 2;
// console.log(rotateArray(arr2, k2)); // Output: [3, 99, -1, -100]
//
// let arr3 = [1, 2, 3, 4, 5, 6];
// let k3 = 4;
// console.log(rotateArray(arr3, k3)); // Output: [3, 4, 5, 6, 1, 2]
