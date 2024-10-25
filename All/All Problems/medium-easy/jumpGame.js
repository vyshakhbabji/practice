/*
	Jump game

	Problem Statement:
	In the Jump Game, you are given an array of non-negative integers. Each element represents the maximum number of steps you can jump forward from that position. 
	Your goal is to determine if you can reach the last index starting from the first index.
	
	Example: [2, 3, 1, 1, 4]
	
	Greedy Approach:
	The greedy approach for this problem involves keeping track of the furthest index we can reach from our current position. We'll iterate through the array and update this "furthest reachable" index as we go.
*/


function canJump (nums){

	let maxReach = 0 

	for(let i = 0 ; i  < nums.length ; i++){
		if(maxReach<i) return false 

		maxReach  = Math.max(maxReach , nums[i]+i)

	}
	return true

}

/*
Approach : 
1. What we know 
	a. we have array of non-negative index 
	b. vals of nums ==>  i+num[i] = newIndex 
2. Goal is to reach or exceed last index ....

Solution :  
Ex: 2,3,1,1,4
	0 1 2 3 4 

at i = 0 , nums[0] = 2  , reach  = 0+2 = 2 
at i = 1   nums[1] = 3  , reach =  3+1 = 4 (can reach)

[3,2,1,0,4]
 0 1 2 3 4

 at i= 0  nums[0] = 3  reach  = 3+0 = 3 
at  i=1    nums[1] = 2  reach  = 2+1 =3
at  i =2  nums[2]=1     reach  = 2+1 = 3
at  i = 3  nums[3]=0    reach  = 3+0 = 3
i = reach fails ... 


*/