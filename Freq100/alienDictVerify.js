function verifyAlienDictionary(words,order){
	let freqOrderArr = function (s){
		let arr = new Array(26)
		for(let i = 0; i < s.length ; i++){
			arr[s.charCodeAt(i)-97] = i
		}
		return arr
	}

	let orderFreq = freqOrderArr(s)

	for(let i = 0 ; i < words.length -1 ; i++){
		let word1= words[i]
		let word2 = words[i+1]

		let minLen = Math.max(word1.length, word2.length)
		let j = 0
		while(j<minLen){
			let index1 = charOrder[word1.charCodeAt(j) - 97]
			let index2 = charOrder[word2.charCodeAt(j) - 97]

			if(index1>index2) return false
			if(index1<index2) break

			j++
		}
		if(j===minLen && word1.length>word2.length) return false
	}
	return true
}