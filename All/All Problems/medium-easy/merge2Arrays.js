/*
You are given two integer arrays nums1 and nums2 sorted in non-decreasing order and two integers m and n, representing the number of elements in nums1 and nums2, respectively. Merge nums2 into nums1 as one sorted array.

The final sorted array should not be returned by the function, but instead, be stored inside the array nums1.
nums1 has a size of m + n to accommodate all elements. You need to merge the arrays in-place.
Example:
Example 1:
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6], n = 3
Output:
nums1 = [1,2,2,3,5,6]
Example 2:
Input:
nums1 = [1], m = 1
nums2 = [], n = 0
Output:
nums1 = [1]


Approach - 
1. 2 passes will be needed . Pass 1 to iterate over nums1 from the right end towards left  while filling right index with largest elements of the 2 arrays reading elemtns from m-1 and n-1 
2. Pass 2 will be to fill remaining elements of nums2 into num1 from the current index of nums2(j) and iterating over current index of num1 (i)
3. Time complexity is O(m+n) and space O(1)

*/

function merge(nums1, m , nums2,n ){

	let sp = nums1.length-1
	let i = m-1 , j = n-1
	while(sp>=0 && i>=0 && j>=0){
		if(nums1[i] >= nums2[j]){
			nums1[sp] = nums1[i]
			i--
		}else{
			nums1[sp] = nums2[j]
			j--
		}
		sp--
	}

	while(sp>=0 && j>=0){
		nums1[sp] = nums2[j]
		j--
		sp--
	}

	return nums1
}