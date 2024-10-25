function firstLastInBinaryArray(nums , k ){

    //fgr-llr
    function first(nums,k){
       let l = 0  , r  = nums.length-1

        while(l<=r){
           let m = Math.floor((l+r)/2)
            if(nums[m] >= k ){
                r = m-1
            }
            else{
                l = m+1
            }
        }

        return (l>=0 && nums[l]===k) ? l : -1
    }

    function last(nums, k ){
        let l = 0  , r  = nums.length-1

        while(l<=r){
            let m = Math.floor((l+r)/2)
            if(nums[m] <= k ){
                l = m+1
            }
            else{
                r = m-1
            }
        }

        return (r<nums.length && nums[r]===k) ? r : -1
    }


    let firstOcc = first(nums, k )
    if(firstOcc === -1) return [-1, -1]

    let lastOcc = last(nums, k )

    return  [ firstOcc, lastOcc]

}

//test cases

let nums1 = [5,7,7,8,8,10];
let k1 = 8;

console.log(firstLastInBinaryArray(nums1, k1)); //Output: [3,4]

let nums2 = [5,7,7,8,8,10];
let k2 = 6;

console.log(firstLastInBinaryArray(nums2, k2)); //Output: [-1,-1]

let nums3 = [];

let k3 = 0;

console.log(firstLastInBinaryArray(nums3, k3)); //Output: [-1,-1]



//Time complexity : O(log n)
//Space complexity : O(1)

//STEPS EXPLAINED
//1. We will use two functions first and last to find the first and last occurance of k in the array.
//2. In the first function, we will find the first occurance of k in the array.
//3. We will use binary search to find the first occurance of k in the array.
//4. We will initialize l=0 and r=nums.length-1.
//5. We will iterate the loop until l<=r.
//6. We will calculate the mid value.
//7. If nums[m]>=k, we will update r=m-1.
//8. Else, we will update l=m+1.
//9. We will return l if l<nums.length and nums[l]===k else -1.
//10. In the second function, we will find the last occurance of k in the array.
//11. We will use binary search to find the last occurance of k in the array.
//12. We will initialize l=0 and r=nums.length-1.
//13. We will iterate the loop until l<=r.
//14. We will calculate the mid value.
//15. If nums[m]<=k, we will update l=m+1.
//16. Else, we will update r=m-1.
//17. We will return r if r>=0 and nums[r]===k else -1.
//18. We will call the first and last functions to get the first and last occurance of k in the array.
//19. If firstOcc===-1, we will return [-1,-1].
//20. Else, we will return [firstOcc
//, lastOcc].

