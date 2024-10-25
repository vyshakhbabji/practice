function minCostRoundTrip(deparing , returning){
	if(departing.length!==returning.length) return -1

	for(let i = departing.length-2; i >=0 ; i--){
			minReturnCost = Math.min(minReturnCost , returning[i+1])
			totalcost = departure[i]+minReturnCost
			mintotal = math.min(totalcost,minTotalcost )
	}

}

departing = [1,2,3,4,5]
returning = [5,4,3,2,1]

console.log(minCostRoundTrip(departing,returning)) // 6