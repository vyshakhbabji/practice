function singleNonDuplicate(a) {
    let l = 0 , r   = a.length

    while(l<r){
        let mid = Math.floor((l+r)/2)

        //ensure mid is even
        if(mid%2 === 1){
            mid = mid-1
        }

        //if mid = mid+1 eleent , then left is pairs
        if(a[mid]===a[mid-1]){
            l = mid+1  // move to right half
         }
        else{
            r =mid  // move to left half
        }
    }
}

// Example usage:
let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
console.log(singleNonDuplicate(nums)); // Output: 2

nums = [3, 3, 7, 7, 10, 11, 11];
console.log(singleNonDuplicate(nums)); // Output: 10


