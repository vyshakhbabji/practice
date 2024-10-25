departing = [1,2,3,4,5]
returning = [5,4,3,2,1]

console.log(minCostRoundTrip(departing,returning)) // 6


function minCostRoundTrip(departing , returning){

	let minReturnCostSoFar = Infinity 
	let minTotalCostSoFar = Infinity
	for(let i = departing.length-2; i >= 0 ; i --){

		minReturnCostSoFar = Math.min(minReturnCostSoFar , returning[i+1])
		totalCost = departing[i] + minReturnCostSoFar
		minTotalCostSoFar = Math.min(totalCost , minTotalCostSoFar)
	}

	return minTotalCostSoFar
}