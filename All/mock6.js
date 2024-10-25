// 508. Most Frequent Subtree Sum
// Medium
// Topics
// Companies
// Given the root of a binary tree, return the most
// frequent subtree sum. If there is a tie, return all the values with the highest frequency in any order.

// The subtree sum of a node is defined as the sum of all the node values
//  formed by the subtree rooted at that node (including the node itself).



function largestSum(root){

	let maxsum = -Infinity

	function dfs(node ){
		if(node ==== null) return 0 

		let left = dfs(node.left)
		let right = dfs(node.right)
		let totalsum = left+right+ node.val
		
		maxsum = Math.max(maxsum , left+right+ node.val)

		return totalsum
	}

	dfs(root )

	return maxsum 

}


time =  O(N)

space  = O(n)  //recursive stack



 // * function TreeNode(val, left, right) {
 // *     this.val = (val===undefined ? 0 : val)
 // *     this.left = (left===undefined ? null : left)
 // *     this.right = (right===undefined ? null : right)
 // * }


//single digit 
//positives


// root === > (   )
//subtree ===> ( X () ())


"4(2(3)(1))(6(5))"


function buildTree(str){
	let stack = []
	let i = 0 
	while(i<str.length){
		if(str[i]====")"){
			let poppedNode  = stack.pop()
			if(stack[stack.length-1].left!==null){
				stack[stack.length-1].left= poppedNode
			}else{
				stack[stack.length-1].right = poppedNode
			}
		}else{
			if(isdigit(s[i])){
				let node = TreeNode(s[i])
				stack.push(node)
			}	
		}
	}
	return stack[0]
}


There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] 
indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.

Return true if you can finish all courses. Otherwise, return false.



You are given two strings order and s. All the characters of order are 
unique and were sorted in some custom order previously.

Permute the characters of s so that they match the order that order was sorted. 
More specifically, if a character x occurs before a character y in order, 
then x should occur before y in the permuted string.

Return any permutation of s that satisfies this property.
Input: order = "cba", s = "abcd"

Output: "cbad"






// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function,
// nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
// For example, [0,1,2,4,5,6,7] 
// might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.


// nums are sorted 
//no duplicate elements 
//negatice is fine 
//find a target in this rotated sorted array 
// O(logn)  - this binary search 
// target is alwayts there 


//edge cases ==> the array is empty 
//array cna have 1 element 
// the array might have the the target 
//array len 



//time compelxity : O(logn)
///space O(1)

function rotatedSortedArray(nums){
	let low =0   , high =  nums.length-1 
	while(low<=high){
		let mid = Math.floor((low+high)/2)
	 	if(nums[mid]===target){
	 		return mid
	 	}
	 	//search space 
	 	if(nums[low]<= nums[mid]){
	 		if(nums[low]<= target && target < nums[mid]){
	 			high = mid-1
	 		}else{
	 			low = mid+1
	 		}
	 	}
	 	else{
	 		if(nums[mid]< target && target <= nums[high]){
	 			 low = mid+1
	 		}else{
	 			high = mid-1 
	 		}
	 	}
	}
	return -1 
}


 [4,5,6,0,1,2]   target = 1 
  0 1 2 3 4 5 


  low=0 , high = 5  mid = 2    6===1 F  4<=1 F 

  low =3  high = 5  mid  =4    4 





































































































