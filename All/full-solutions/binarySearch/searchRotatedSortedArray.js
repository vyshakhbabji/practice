function searchRotatedSorted(a, target) {

    let left  = 0 ,  right  = a.length-1

    while(left<=right){ //check the equal sign
        let mid  = Math.floor((left+right)/2)

        if(a[mid]===target) return  mid

        if(a[left]<=a[mid]){ //left half is sorted
            if(a[left]<=target && target<a[mid]){
                right = mid-1
            }
            else{
                left = mid+1
            }
        }else{ //right half is sorted
            if(a[mid]<target && target<=a[right]){
                left = mid+1
            }else {
                right = mid-1
            }
        }
    }
    return -1

}

// Example usage:
let nums = [4, 5, 6, 7, 0, 1, 2];
let target = 0;
console.log(searchRotatedSorted(nums, target)); // Output: 4
