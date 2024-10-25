departing = [1,2,3,4] 
returning = [4,3,2,1]

function minCostRoundTrip(departure , returning){
	if(departing.length!==returning.length) return -1
	let minTotalCost  = -Infinity
	for(let i = departing.length-2; i >=0 ; i--){
			let minReturnCost = Math.min(minReturnCost , returning[i+1])
			let totalcost = departure[i]+minReturnCost
			minTotalCost = Math.min(totalcost,minTotalCost )
	}
	return minTotalCost
}