/*

Problem: Koko Eating Bananas

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
The guards have gone and will come back in h hours. 
Koko can decide her bananas-per-hour eating speed of k. 
Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
If the pile has less than k bananas,  she eats all of them instead and won't eat any more bananas during this hour. 
Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return. 
Return the minimum integer k such that she can eat all the bananas within h hours.


Approach: 

1. koko eats k bananas per hour from single pile 
2. if pile has less than k bananas , she can eat the whole pile and stop for an hour 
3. we need to check if she can eat all bananas in h hours 
canEatInH( X ,h)

4. bananas/hour is speed 

5. time  = size/speed  time = hour

6. when pile_size <= speed   time = size/speed = 1 
7. when pile > speed ==== ? 

so lets look at ex:  piles = [3,6,7,11], h = 8

here max speed = 11  lowest she can eat ie min = 1 

let say 1 is divides all elements in array  , it would take => 3+6+7+11 = 27 hrs 
with 2   ===> ceil  27/2 ==>  13
with 3 /hr ===> ceil 27/3 ===> 9
with 4 ===>  27/4 === 7  <= 8  true
		
*/



function koko(piles,h){

	let low = 1 , high  = Math.max(...piles) //max speed at which koko can eat banana 
	let totalBananas = piles.reduce((a,b)=>a+b)

	function canEatAll(speed){
		
		let time = 0 
		for(let p of piles){
			time+= Math.ceil(p/speed)
		}

		return time<=h
	}



	// for(let i = 1 ; i <= high ; i++){
	// 	if(canEatAll(i)){
	// 		return i 
	// 	}
	// }


	// we  know the range ,  we know how to find element in range using bs for some condition which is canEatAll

	while(low<high){
		let mid = Math.floor((low+high)/2)
		if(canEatAll(mid)){
			right=mid  // find first variation
		}else{
			low = mid+1
		}
	}

	return low 

}


































