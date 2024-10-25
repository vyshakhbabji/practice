/*
You are given an integer k and an unsorted array of integers. Your task is to find the k-th largest element in the array.

Note that it is the k-th largest element in sorted order, not the k-th distinct element.

Example:
Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Explanation: The 2nd largest element in the array is 5.
Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
Explanation: The 4th largest element in the array is 4.

Approach 1 : 
1. The list in unsorted. 
2. The question asks to get kth largest element 
3. The ds which is intutive to this is question is heap as we can utilize heap to hold k large element and pop all small elements - minHeap
4. If heap size exceeds k , pop min element from the root 
4. Time to insert to heap is O(logk) and delete is O{logk} . As we need to pop only smaller elements and hold k large elements , it would be nlogk time compelxtiy and O(k) space compelxtiy 


Approach 2: 
1. The list is unsorted 
2. We can apply quick select for k elements and sort out one side at a time while we start partitioning array and sorting it . 
3. Quick select extension of quicksort -  element greater than pivot on one one side and smaller on other 
3. Pivot is initialized , while quick select - pivot will be moved to kth largest and that element will be returned as the end
	a. if pivot is in k-1 index , thats largest 
	b. greater then k-1, search left 
	c. less than k-1 search right 
4. avergae case complexity O(n) and worst case is O(n^2) with space complexity O(1)



Edge cases : 
1. what if k=1 
2. what if all elements are same ? we still need correct kth element 


*/

function kthLargest(nums , k ){
	let heap  = new MinPriorityQueue((a,b)=>a-b)
	for(let n of nums){
		heap.enqueue(n)
		if(heap.size()>k){
			heap.dequeue()
		}
	}

	return heap.front().element
}


function kthLargest2(nums,k){
	let low = 0 , high = nums.length-1 , target = nums.length - k // target index 

	//find the pivot using partition => quick select for sorting one partition at a time 
	function partition(nums,low, high){
		let i = low , pivot = nums[high]

		for(let j = low ; j<high ; j++){
			if(nums[j]<pivot){
				[nums[i], nums[j]] = [nums[j], nums[i]]
				i++
			}
		}
		//swap high and low  
		[nums[i], nums[high]] = [nums[high], nums[i]]
		return i 
	}



	//find pivot index
	while(low<=high){
		let pivot = partition(nums,low,high)
		if(pivot===target){
			return nums[pivot]
		}else if (pivot<target){
			low = pivot + 1
		}else{
			high = pivot - 1
		}
	}
	return -1  
}


























