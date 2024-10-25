/*

Problem:
You are given a list of intervals where each interval is represented as [start, end]. Your task is to merge all overlapping intervals and return the list of merged intervals. Two intervals [a, b] and [c, d] are considered overlapping if b >= c.

Example:
Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]]

Explanation: Intervals [1, 3] and [2, 6] overlap, so they are merged into [1, 6].

Clarifying Points:
The intervals are represented as pairs of integers, where the first integer is the start time and the second integer is the end time.
The intervals are not necessarily sorted.



Approach :
1. sort intervals based on start of each pair 
1. intialize a variable [startA,endA] = interval[0]  , res = [] 
2. iterate over rest of the elements 
3. initalize antoher vairable in the while loop for current pair [startB,endB] = interval[i]
3. compare each pair with the startA,endA  = specifically with  startB<=endA , 
	a. if true , then new  endA will be Max(endA and endB) 
	b. if false , then push it to res array 
4. reassingn startA endA with startB endB 
5 . make sure to add last element to the res as well 

Time complexity : O(N) for parsing and Onlogn for sorting 
Space complexity : O(1) if res is not considered else O(N)
*/


function mergeInterval(intervals){
	if(intervals.length === 0 ) return []

	intervals.sort((a,b)=>a[0]-b[0])

	let [startA,endA] = intervals[0]
	let i = 1
	let res= []
	while(i<intervals.length){
		let [startB,endB] = intervals[i]
		if(startB<=endA){
			endA = Math.max(endA ,endB)
		}
		else{
			res.push([startA,endA]);
			[startA,endA]=[startB,endB]
		}
		i++
	}
	res.push([startA,endA])
	return res 
}



//Dry run 

/*
	[[1, 3], [2, 6], [8, 10], [15, 18]]

	
	 i=0	[startA,endA]  = [1,3 ]

	i==1   [startB,endB]  =  [2,6 ]  === > 2<=3 T  , [startA,endA]  = 1,6   res = []
	i=2     [startB,endB]  = 8,10  ====> 8<=6 F    [startA,endA]  = 8,10  res=  [[1,6]]
	i=3 	[startB,endB] = 15,10 ====>  15<=10 F  [startA.endA] = 15.10  res = [[1,6], [8,10], ]

	==one off  => res = [[1,6], [8,10], [15,10] ]
*/
























