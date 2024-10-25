/*
	given words list  and pattern 
	sort the chars in pattern according to freq of occurance in the list of words 
	if freq is same maintain relative order from pattern 


	Words: ["apple", "pear", "peach", "plum"]
	Pattern: "aeplr"

	Output: "pearl"
	
	//understanding of the problem statement 

	given list is words and patterns 

	Approach : 
	1. create a freq map for all chars in the words 1 word at a time 
	2. if its a new char , then i build a string list to capture the order 
	3. sort the chars based on frequency 
	4. now check the pattern and the newchar order , if the char from my order is relative to the pattern i will create a new string 


	time compelxity = expecting it to be O(n) + klogk for sorting  ,  might use 2 pointers for tracking order and pattern 
	space complexity = expecting O(N) =  for map , order 

	EdgeCases: 

	if words empty  = return ""
	if pattern empty =  return ""
	if freqmap has no chars in patter then return just concatinated chars based on freq 

*/

function solution (words, pattern){

	let freqMap = {}

	let maxCount = -Infinity 

	// frequence map parsing all words 
	// O(n)
	function freqMapConstructor(){
		for(let w of words){
			for(let c of w){
				
				if(!(c in freqMap)){
					freqMap[c]=0
				}
				freqMap[c]+=1
				maxCount = Math.max(freqMap[c], maxCount)
			}
		}
	}

	//to get index of char from pattern 
	// O(n)
	function getPatternIndex(char){
		return pattern.indexOf[chars]
	}

	//call function to create freqMap
	freqMapConstructor()

	//bucket sort freq arry  O(k) space 
	let freqArr = Array(maxCount+1).map(()=>[])


	// O(n)
	for(let [k,v] of Object.entries(freqMap)){
		freqArr[v].push(k)
	}


	let resString = "" 

	// O(n) + klog(k)
	for(let i = maxCount ; i >=0 ; i--){
		let chars = freqArr[i]
		
		//sort / append to res based on the pattern 
		let patternChars = chars.filter(char => pattern.includes(char));
		chars.sort((a,b)=> getPatternIndex(a) - getPatternIndex(b))
		resString+= chars.join("")

		// Append remaining chars not in pattern
        let nonPatternChars = chars.filter(char => !pattern.includes(char));
        resString += nonPatternChars.join("");
	}

	return resString 
}




















