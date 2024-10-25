/*
Problem Statement:
You are given two sparse vectors. Implement a function that calculates the dot product of the two sparse vectors.

A sparse vector is a vector that has a majority of its elements as zeroes. Your task is to compute the dot product of two sparse vectors efficiently, without wasting time processing zero elements.

Example:
Example 1:
Input:
v1 = [1, 0, 0, 2, 3]
v2 = [0, 3, 0, 4, 0]
Output: 8

Notes:
A dot product is the sum of the products of the corresponding elements of two vectors.


Approach: 
1. the elements in the array could be sparse . 
2. because the dot product is sum of products of corresponding elements , indexs needs to be stored and checked if thosee indexes available in the second array too 
3. if the lemenets of the indexes are 0 , it anyways returns 0 .  so we dont need to track /store elements of value 0 in the map
4. this check can be incorportated when storing the element in the map 
*/