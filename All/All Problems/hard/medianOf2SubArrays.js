/*

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


Approach : 
The goal is to find the median of the array 
median is middle eleemnt if the array is odd length 
median is sum of middle 2 eleemnts if the arrya is even 
The goal here is , if there are 2 arrays ,  without merggin them , find theier medians as if they were merged and sorted 

Becuase both the arrays are sorted ,  we can try to apply binary search 

Lets say 2 arrays are of even length  ---  (4) and (6) ===>  partition array into equal halfs left and right => (2)+(2) , (3)+(3) and then consider left's of both
and rights of both to apply binary search to find mid element / median 

[1 2 3 4 ]  [ 2 3 5 6 ]

  LX     RX   LY    RY 
[1,2] [3 4 ] [2 3] [5 6]
maxLX  minRL  maxLY minLy   
  2    3       3    5
*/


function findMedianSortedArray(nums1 , nums2){

	//make sure the first array is smaller in length 

	if(nums1.length > nums2.length){
		[nums1, nums2]  = [nums2 , nums1]
	}

	const m = nums1.length 
	const n = nums2.length

	let totalLength = m+n
	let halfLength= Math.floor((totalLength+1)/2) // 1 is added to handle odd lengths ? 


	//prep for binary search 
	let left = 0 
	let right = m 

	while(left<=right){

		//calculate mid points of current search range in first array 
		const partitionX = Math.floor(Math.floor((left+right)/2))

		//partition y is calculated so that  (left sides) of both array nums1 and nums2 combined are of same length 
		const partitionY = halfLength - partitionX 


		//find max element of left  and min of right for X and Y arrays 
		//   // Example:
        // nums1 = [1, 2, 3, 4]
        // nums2 = [2, 3, 5, 6]
        // partitionX = 2, partitionY = 2

		const maxLeftX   = partitionX === 0 ? -Infinity : nums1[partitionX-1]
		const minRightX  = partitionX === m ? Infinity : nums1[partitionX]

		const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1]
		const minRightY = partitionY === n ? Infinity : nums2[partitionY]

		  // In our example:
        // maxLeftX = 2  (nums1[1])
        // minRightX = 3 (nums1[2])
        // maxLeftY = 3  (nums2[1])
        // minRightY = 5 (nums2[2])

        if(maxLeftX<=minRightY && maxLeftY<= minRightX){
        	   // We've found the correct partition
            // In our example, this condition is true: 2 <= 5 && 3 <= 3

            if(totalLength %2 ===0 ){
            	return (Math.max(maxLeftX,maxLeftY) + Math.min(minRightX, minRightY) )/ 2
            }
            else{
            	return Math.max(maxLeftX , maxLeftY)
            }
        }
        else if(maxLeftX>minRightY){
        	right = partitionX -1
        }
        else{
        	left= partitionX +1 
        }

	}

	throw new Error("invalid input array ")




}




















































