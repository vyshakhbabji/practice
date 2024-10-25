function finddup(arr) {

    let slow = arr[0];
    let fast = arr[0];

    while(true){
        slow= arr[slow]
        fast = arr[arr[fast]]

        if(slow===fast) break
    }

    slow = arr[0]
    while(slow!=fast){
        slow = arr[slow]
        fast = arr[fast]
    }

    return slow



}

let arr = [1, 3, 4, 2, 2];

console.log(finddup(arr)); // Output: 2

let arr2 = [3, 1, 3, 4, 2];

console.log(finddup(arr2)); // Output: 3