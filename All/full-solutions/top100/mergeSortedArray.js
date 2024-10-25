var merge = function(nums1, m, nums2, n) {
    let sp = nums1.length-1

    let i = m-1 , j = n-1

    while(i>=0 && j>=0 && sp>=0){

        if(nums1[i] >= nums2[j]){
            nums1[sp] = nums1[i]
            sp--
            i--
        }
        else{
            nums1[sp] = nums2[j]
            sp--
            j--
        }
    }

    while(j>=0 && sp>=0){
        nums1[sp] =nums2[j]
        sp--
        j--
    }

    return nums1
};

let nums1 = [1,2,3,0,0,0]
let m = 3
let nums2 = [2,5,6]
let n = 3

console.log(merge(nums1, m, nums2, n)) // [1,2,2,3,5,6]
