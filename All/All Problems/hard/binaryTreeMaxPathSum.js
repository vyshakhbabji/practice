/*
You are given the root of a binary tree, where each node contains an integer value. Your task is to find the maximum path sum.

A path is any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node, and it does not need to go through the root.

Example:
Example 1:
Input: root = [-10, 9, 20, null, null, 15, 7]
Output: 42
Explanation: The maximum path sum is 15 -> 20 -> 7, which sums to 42.
Example 2:
Input: root = [1, 2, 3]
Output: 6
Explanation: The maximum path sum is 1 -> 2 -> 3, which sums to 6.
Example 3:
Input: root = [1, -2, -3, 1, 3, -2, null, -1]
Output: 3
Explanation: The maximum path sum is 3.


Approach: 

1. Ask is to calculate max path sum . 
2. May  or may not go through root 
3. We can use dfs to iterate throguh the tree to cover 3 senarios 
	a. max path to include nodes itself
	b. max path that includes one of its subtree (left or right )
	c . max path that includes both subtree 
4. Keep a global max and running max   
5. return running max 

*/