function merge3Lists(a,b,c){
	let i = 0 , j = 0 ,  k=0

	let res= []
	let lastval = 0 
	while(i<a.length || j < b.length || k < c.length){
		let val1  = i<a.length ? a[i] : Infinity
		let val2  = j<b.length ? b[j]: Infinity 
		let val3  = k < c.length ? c[k]:Infinity

		let min = Math.min(val1,val2 , val3)

		if(lastval != min){
			lastval = min
			res.push(min)
		}

		if(i<a.length && min===a[i]) {
			i++
		}
		if(j<b.length && min===b[j]){
			j++
		}
		if(k<c.length&& min===c[k]){
			k++
		}

	}

	return res 
}