/*
A conveyor belt has packages that must be shipped from one port to another within days days.
The ith package on the conveyor belt has a weight of weights[i]. 
Each day, we load the ship with packages on the conveyor belt (in the order given by weights). 
We may not load more weight than the maximum weight capacity of the ship.
Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within days days.

 

Example 1:

Input: weights = [1,2,3,4,5,6,7,8,9,10], days = 5
Output: 15

Input: weights = [3,2,2,4,1,4], days = 3
Output: 6


Approach

1. packages must be shipped from one port to another within DAYS(given) days

2. we can load ship with only upto max weight capacity of the ship W  

3. we need to reutrn least weight capacity of the ship 

so here ,  1 package of max weight is atleast the min capacity of the ship

4. If not ,  u cant ship the packge 10 

5. highest would be sum of all weights => sum(weights)

6.  we got the range 

7.  for cap 10 

	1:  1 2 3 4 
	2. 5 
	3. 6
	4. 7
	5 . 8  

	XXXXXX
	
	for cap 11 , 12, 13, 14 , 15 .... 

	function canship(cap){
	
		let days = 1
		let load = 0 
		for(let w in weights){
			 load+= w 
			 if(load>cap){
				days++
				load = w // current package still needs to be shipped  
			 }
		}

		return days < DAYS
	}

*/


function shipWithinDays(weights, days){

	let low = Math.max(..weights)
	let high = Math.reduce((a,b)=>a+b)


	function canShip(capacity){

		let day = 1 
		let load = 0 
		for(let w of weights){
			load+=w
			if(load>capacity){
				day++
				load =w
			}
		}

		return day<=days

	}



	while(low<high){
		
		let mid = Math.floor((low+high)/2)
		if(canShip(mid)){
			high=mid
		}else{
			low=mid+1
		}

	}

	return low 
}







































