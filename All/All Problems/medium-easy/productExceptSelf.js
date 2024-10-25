/*

Problem statemement 
Given an array of integers, return an array where each element at index `i` is the product of all elements in the input array except the one at `i`.

Constraint 
**Constraints:**  
- No use of division.
- The solution should run in **O(n)** time complexity.


Example 
Given input: [1, 2, 3, 4]
Output: [24, 12, 8, 6]

Approach to solve: 
1. initalize res array of size input and leftPrefix =1 and rightPrefix =1 
2. first pass left to right on res and num - update res with res*leftprefix ,  update leftprefix to leftPrefix*nums[i]
3. second pass right to left  on res and num- update res with res* rightprefix , update rightprefix to right*prefix*nums[i]
4. returrn res 

Timecomplexity  - O(n)
SpaceComplexity - O(n) for res and O(1) if res is considered as res arrray 

DryRun = 

nums = [1,2,3,4]
		  ^

res = [ 1, 1, 1, 1]

first pass : 

i= 0  left  =1  res[0] = 1  res[0] = 1*1 =1  left = 1*1
i= 1  left  =1  res[1] = 1  res[1] = 1*1 =1  left = 1*2 =2 
i= 2  left = 2  res[2] = 1  res[2] = 1*2 =2  left = 2*3 =6 
i= 3  left =6   res[3] = 1  res[3] = 1*6 =6  left = 6*4 =24  
 
after first pass res= [1,1,2,6]
						 ^
second pass:  
i=3  right = 1  res[3] = 6  res[3] = 6*1=6   right =1*4=4
i=2  right =4   res[2] = 6  res[2]=  2*4=8   right =4*3=12
i=1  right =18  res[1] = 1  res[1] = 1*12    right =12*2= 24
i=0  right=24   res[0] =1   res[0]= 1*24     right = 24*1 =24

res after second pass = [24,12,8,6]


*/

function productExceptSelf(nums){
	let res = Array(nums.length).fill(1)
	let rightPrefix = 1 , leftPrefix=1
	for(let i = 0 ; i <nums.length; i ++ ){
		res[i] * = leftPrefix
		leftPrefix*=nums[i]
	}
	for(let i = nums.length-1; i>=0 ;i--){
		res[i]*=rightPrefix
		rightPrefix*=nums[i]
	}
	return res 
}
