//kth largest using quick select
// step1: find the pivot
// step2: if pivot is equal to target then return pivot
// step3: if pivot is less than target then move to right
// step4: if pivot is greater than target then move to left
// step5: return -1 if not found
//
//PARTITION FUNCTION
// step1: set pivot as last element
// step2: set i as left
// step3: iterate from left to right
// step4: if element is less than pivot then swap with i and increment i
// step5: swap pivot with i
// step6: return i
//

function findKthLargest(nums,k){

    let l = 0 , r = nums.length-1 , target = nums.length -k
    while(l<=r){
        let pivot = partition(nums,l,r)
        if(pivot === target){
            return nums[pivot]
        }else if(pivot<target){
            l= pivot+1
        }else{
            r=pivot-1
        }
    }
    return -1
}

function partition(nums,l,r){
    let pivot = nums[r]
    let i = l
    for(let j = l ; j < r ; j++){
        if(nums[j]<pivot){
            [nums[i],nums[j]] = [nums[j], nums[i]]
            i++
        }
    }
    [nums[i], nums[r]] = [nums[r],nums[i]]
    return i
}