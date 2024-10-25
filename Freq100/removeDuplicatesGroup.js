function removeDup(s){

	let res= ""
	let n = s.length

	let i = 0

	while(i<n){
		let start = i 

		while(i+1 <n && s[i]===s[i+1]){
			i++
		}

		let grouplen = i-start+1

		if(grouplen<3){
			res+=s.substring(start,i+1)
		}

		i++

	}

	if(res.length>1 && res[i]===res[res.length-1]) return ""

		return res 
}