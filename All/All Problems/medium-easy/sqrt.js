var mySqrt = function(x) {
    if(x ===0 || x === 1 ) return  x 
    let low = 1 , high = Math.floor(x/2) +1 
	while(low<=high){
		let mid = Math.floor((low+high)/2)
		let square = mid*mid 
		if(square === x )return mid 
		else if(square<x) low= mid+1
		else high = mid-1
	}
	return high 
};