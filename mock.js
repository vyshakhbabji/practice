// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
//
// For example, for arr = [1,2,3], the following are all the permutations of arr:
// [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
// The next permutation of an array of integers is the next lexicographically
//  greater permutation of its integer. More formally, if all the permutations of
//  the array are sorted in one container according to their lexicographical order,
//  then the next permutation of that array is the permutation that follows it in the sorted
//  container. If such arrangement is not possible, the array must be rearranged as the
//  lowest possible order (i.e., sorted in ascending order).
//
// For example, the next permutation of arr = [1,2,3] is [1,3,2].
// Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a
// lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.
//
// The replacement must be in place and use only constant extra memory.
//
// Example 1:
//
// Input: nums = [1,2,3]
// Output: [1,3,2]
// Example 2:
//
// Input: nums = [3,2,1]
// Output: [1,2,3]
// Example 3:
//
// Input: nums = [1,1,5]
// Output: [1,5,1]
//
//
//
// // 1000
// // no negative
// // no empty
// // if array i 1 length return arr
// // 4 2 6 5 = > 4 5 2 6
// // [0 1 2 3 ] ===>  [0 1 3 2 ]
//
//
//
//  /// [1,2,3] === >  [1. 3 , 2 ]
//
// 	0 1 2 3 4 5 6 7
// //  1 2 3 4 8 7 6 5
// 		  i  i+1
// 		  i       j
//
// /// 1 2 3 5 8 7 6 4
//             i
//
//
//
// /// 1 2 3 5 4 6 7 8
//
//
//  0 1 2
// // [3,2,1]
//
//
//
//
// function nextPermutation (nums ){
//
// 	let i = nums.length-2
//
// 	//find element smaller than adj elemennt when parsing from right to left
// 	while(i >=0 ){
// 		if(nums[i]<nums[i+1]){
// 			break
// 		}
// 		i--
// 	}
//
// 	//if no element is founf revers nums
// 	if(i<0){
// 		return nums.reverse()
// 	}
//
// 	///find element laregr than elenetn at i
// 	let j = nums.length-1
// 	while(i<j){
// 		if (nums[i]<nums[j]) break
// 		j--
// 	}
//
// 	//swap
// 	[nums[i], nums[j]] = [ nums[j], nums[i]]
//
// 	let l = i+1 , r = nums.length-1
//
// 	//rverse
// 	while(l<r){
// 		[nums[l], nums[r]] = [nums[r],nums[l]]
// 		l++
// 		r--
// 	}
//
// 	return nums
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
