/*
You are given an integer array ribbons, where ribbons[i] represents the length of the ith ribbon, and an integer k. 
You may cut any of the ribbons into any number of segments of positive integer lengths, or perform no cuts at all.

For example, if you have a ribbon of length 4, you can:
Keep the ribbon of length 4,
Cut it into one ribbon of length 3 and one ribbon of length 1,
Cut it into two ribbons of length 2,
Cut it into one ribbon of length 2 and two ribbons of length 1, or
Cut it into four ribbons of length 1.
Your goal is to obtain k ribbons of all the same positive integer length. You are allowed to throw away any excess ribbon as a result of cutting.

Return the maximum possible positive integer length that you can obtain k ribbons of, or 0 if you cannot obtain k ribbons of the same length.


Approach : 
1. given is array of ribbons 
2. can cut or no cuts 
3. 4 == >  4 or 3+1 or 2+2 or 1+1+1+1 
4. goal is to obtain k ribbons of all the same positive integrars of length  ---  condtion ==> throw away excess ribbons 

return max positive integer 

===> so %2 until u reach 1 ? 


Example : [9,7,5] k = 3  ===>   low = 1 high = min of array   

9 >> 5+ 4  
7 >> 5+2
5 


[7,5,9] k = 4  low = 1 high = 5 

4 >> 4
5 >> 4+1
9 >>> 4+4+1

so answer is 4 ? 

*/



function cutRibbon (ribbons , k ){

	let total = ribbons.reduce((a,b)=>a-b) 
	
	if(total<k) return 0 

	let low = 	1
	let high = 	Math.min(...ribbons)

	function canCut(len){
		let pieces = 0 

		for(let r of ribbons){
			if(r/k<1){
				return false 
			}
			else{
				while(r/k > 1){
					pieces ++
				}
			}
		}

		return pieces <= k

	}



	while(low<high){
		let mid = Math.floor((low+high)/2)
		if(canCut(mid) <= k ){
			high = mid
		}else{
			low = mid+1
		}
	}
	return low 

}






















