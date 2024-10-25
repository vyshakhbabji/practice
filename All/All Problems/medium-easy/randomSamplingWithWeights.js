/*
Problem Statement:
You are given a weighted array of positive integers w, where w[i] represents the weight of the i-th index. 
Your task is to implement a function that randomly selects an index from the array, such that the probability of selecting an index i is proportional to w[i].

You will need to implement two functions:

Solution(w): This function initializes the object with the array w.
pickIndex(): This function randomly selects and returns an index based on the weights provided.
Example:
Example 1:
Input:
w = [1, 3]
Output:
pickIndex() will return index 1 with probability 75% and index 0 with probability 25% (since 3/(1+3) = 75% and 1/(1+3) = 25%).
Example 2:
Input:
w = [1, 2, 3]
Output:
The probability of picking index 0 is 1/6, index 1 is 2/6, and index 2 is 3/6.
Notes:
You can assume the weights will always be positive integers.
The function should be efficient enough to handle multiple calls to pickIndex().



Approach: 

Problem Understanding:
“We are given a list of weights, and the task is to randomly select an index such that the probability of selecting an index is proportional to its weight.”

Key Insight:
“Convert the weights into a prefix sum array, which will allow us to map each index to a range based on its weight. Then, use binary search to find the correct index based on a randomly generated number.”

Steps:

Create a prefix sum array from the weights.
Generate a random number between 0 and the total weight.
Use binary search to find the index corresponding to the random number.
Return the index.
Time/Space Complexity:
“Building the prefix sum takes O(n), and each pickIndex call takes O(log n) using binary search.”


*/



class Solution(weights) {

	constructor(weights){
		this.prefixSum = []
		let sum = 0 
		for(let w of weights){
			sum+=w
			this.prefixSum.push(sum)
		}
		this.totalSum = sum 
	}

	pickIndex(){
		let target = Math.floor(Math.random()*this.totalSum)
		let low = 0 , high = this.prefixSum.length - 1
		while(low<=high){
			let mid = Math.floor((low+high)/2)
			if(this.prefixSum[mid]<=target){
				low = mid+1
			}else{
				high = mid-1
			}
		}
		return low 
	}
}






















