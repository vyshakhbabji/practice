
/*

You are given an array of weights representing the weights of packages, 
and an integer D representing the number of days in which all the packages must be shipped. 
You need to determine the minimum capacity of a ship required to ship all the packages within D days. 
The ship can only carry packages sequentially, and you cannot split any package.


Approach ; 
1. Given is list of weights W 
2. D is number of days max to ship all these packages 
3. return the min capacity of ships required to ship these packages 
4. From the weights we get to know whats the max weight that can be shippoed in 1 day = > max ...weights = min per day
5. each day i can ship multiple packages until the sum is max weights 
6. I cannot ship partial weights /packages 
7 . total weights to be shipped in D Days = total weights  == this is if there was no limit on capacity on ship - we could have shipped all packages at once = 55
8 . Q is = >  what min capacity allows me to shp all packts 
9 . if D is large we could have shipped it in more trips
10. if D is small we ship more capacity in smaller trips 



Lets say weights are [1...10]
D = 5
that means - day 1  = >  1+2+3+4 +5= 15  
			 day 2  =>  6+7
			 day 3     8
			 day 4   9 
			 day 5  = 10

So the goal is to find "15" === so we can split the packages per day 

*/

var shipWithinDays = function(weights, days) {
  	
  	let low = Math.max(...weights)
  	let high  = weights.reduce((a,b)=>a+b)

  	while(low<high){
  		let mid = Math.floor((low+high)/2)
  		if(canship(weights , days, mid)){
  			//reduce the capacity (mid) and check 
  			high = mid
  		}else{
  			low =mid+1
  		}
  	}
  	return  low // return the least weight capacity 
}

function canShip(weights , maxDays , capacity){

	let countDays = 1
	let curload = 0 
	for(let w of weights ){

		//if per day load exceeds capacity , then reset the load and add more days 
		if(curload+w > capacity){
			countDays++
			curload=0 
		}

		curload+=w
		if(countDays>maxDays) return false 
	}
return true 
}


























