function kthLargest(nums,k){
    const minHeap = new MinHeap()
    for(let n of nums){
        minHeap.push(n)
        if(heap.size() > k ){
            heap.pop()
        }
    }
    return minHeap.peek()
}





//using partition and quick select

function kthLargest(nums,k){
    let left = 0
    let right = nums.length-1
    let target = nums.length-k
    while(left<=right){
        let pivot = partition(nums,left,right)
        if(pivot === target){
            return nums[pivot]
        }
        else if(pivot < target){
            left = pivot+1
        }
        else{
            right = pivot-1
        }
    }
    return -1
}

function partition(nums,left,right){
    let pivot = nums[right]
    let i = left
    for(let j=left;j<right;j++){
        if(nums[j]<pivot){
           //swap
            [nums[i],nums[j]] = [nums[j],nums[i]]
            i++
        }
    }
    [nums[i],nums[right]] = [nums[right],nums[i]]
    return i
}

//TIME COMPLEXITY: O(N) for quick select and O(NlogK) for minHeap

//WHICH ONE BETTER?
//If k is small then quick select is better
//If k is large then minHeap is better



