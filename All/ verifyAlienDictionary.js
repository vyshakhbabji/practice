function verifyAlienDictionary(words,order){
	
	let freqOrderArr = (s){
		let arr = Array(26).fill(0)
		for(let i=0;i<order.length; i++){
			arr[s.charCodeAt(i) - 97]=i
		}
		return arr
	}

	let charOrder = freqOrderArr(order)

	for(let i =0  ; i < words.length-1; i++){
		let word1 = words[i]
		let word2= words[i+1]

		let minLen = Math.min(word11.length , word2.length)

		while(j<minLen){
			let index1 = charOrder[word1.charCodeAt(j)-97]
			let index2 = charOrder[word2.charCodeAt(j)-97]


			if(index1 > index2) return false 
			if(index1<index2) break
			j++
		}

		if(j === minLen && word1.length>word2.length) return false 
	}
	return true 

}