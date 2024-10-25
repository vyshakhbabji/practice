/*

Given a list of non-negative integers nums, you are tasked with finding the number of subarrays whose sum equals a given integer k.

Example:
Example 1:
Input: nums = [1, 1, 1], k = 2
Output: 2
Explanation: The subarrays with sum 2 are [1, 1] (appearing twice).
Example 2:
Input: nums = [1, 2, 3], k = 3
Output: 2
Explanation: The subarrays with sum 3 are [1, 2] and [3].
Notes:
The array can contain both positive and negative numbers.
The solution should run in O(n) time.


Approach : 

1. Problem understanding :  there is a target k  ,  i need to find how many subarrays in this array of non-negative numbers can sum up to target 
2. We can use cummulative sum technique to solve this problem in O(n) time complexity and hashmap with O(N) space complexity 
3. we cna use this to determine how many times the target appeared upto current index 
4. We iterate through the array and keep a track of running sum until that index 
5. we can check if running sum - k exisits in hashmap , if yes increment the count 
6. if current sum itself is k , increment the count -> this will be the edge case   sumMap [0] = 1 


*/

function subArraySumEqualk(nums, k){

}