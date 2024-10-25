
let A = [[1,3,] [ 4,5] , [7,8]]
			i


let B = [[2,4] , [5,6] , [9 ,10]]
			j
		
newInterval = [1,4]

res  = [[1,4]]

function merge2Intervals(A, B){


	let i = 0 
	let j = 0 

	while(i<A.length && B<j.length){
		let [startA , endA] = A[i] 
		let [startB, endB] = B[i]

		
		if(startB<=endA && startA<=endB){
			let newInterval= [Math.min(startA,startB) , Math.max(endA,endB)]
			res.push(newInterval)
			i++
			j++
		}else {
			if(endA <startB){
				res.push([startA,endA])
				i++
			}else{
				res.push([startB,endB])
				j++
			}
		}

	}

	while(i<A.length){
		res.push(A[i])
	}

	while(j<B.length){
		res.push(B[j])
	}
	
	return res 

}