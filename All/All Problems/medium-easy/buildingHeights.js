/*

You are given a list of integers that represents the heights of buildings in a row. A building can only receive sunlight if it is not blocked by a taller building to its left. Your task is to find the total number of buildings that can receive sunlight.

Input:

A list of integers heights where each integer represents the height of a building.
Output:

An integer representing the number of buildings that can receive sunlight.
Example:

Input: heights = [3, 7, 8, 3, 6, 1]
Output: 3
Explanation: Buildings with heights 3, 7, and 8 can receive sunlight. The building with height 3 (fourth in the list) is blocked by the building with height 8. Similarly, the buildings with heights 6 and 1 are blocked by taller buildings to their left.

Input: heights = [1, 2, 3, 4, 5]
Output: 5
Explanation: All buildings can receive sunlight since each building is taller than the previous one.

Input: heights = [5, 4, 3, 2, 1]
Output: 1
Explanation: Only the first building with height 5 can receive sunlight; all others are blocked by it.


Approach and intution : 
1. left building should be smaller height than right building so building to the right can recieve sunlight 
2. so iterate from left to right ,  if left is smaller than right add left index to res 
3. initailize max = -Infinity and while iterate keep track of max-so-far and if the next height is greater than max update max , add index 

*/


function buildingheights(heights){

	let res =[]
	let max =-Infinity 
	for(let i=0 ; i < heights.length ; i++){
		if(max< heights[i]){
			max = Math.max(heights[i],max)
			res.push(i)
		}
	}

	return res.length
}

/*

	dryrun : 

	[3, 7, 8, 3, 6, 1]
							 max<heights[i]
	i = 0  max = -Infinity   max <3 T  [0]
	i= 1   max = 3           3<7    T  [0 , 1]
	i=2     max =7           7<8   T   [ 0,1,2,]
	i=3 	max = 8          8<3  F 
	 i = 4                   8<6
	 i =5                    8< 1 

	 res =[0,1,2] return len = 3 

	Time Complexity  : O(n) and O(1)

*/













