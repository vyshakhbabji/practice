function kthMissingPositiveNumber(nums , k){

    // a[idx] + k  >=  idx+1   ===> a[idx] - idx+1  >=  -k ==>  a[idx] - idx+1 <= k

    let  l = 0  , r = nums.length-1

    while(l<=r){
        let m = Math.floor((l+r)/2)
        if(nums[m] - (m+1) < k) {
            l = m+1
        }
        else{
            r = m-1
        }
    }

    return l+k

}

let arr = [2,3,4,7,11]

console.log(kthMissingPositiveNumber(arr,5)) //9

let arr2 = [1,2,3,4]
console.log(kthMissingPositiveNumber(arr2,2)) //6

let arr3 = [2,3,4,7,11]
console.log(kthMissingPositiveNumber(arr3,5)) //9

