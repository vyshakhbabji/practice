/*
	string with lowercase char and parenthesis . 
	Remove the min number of parentheis 
	the result string becomes valid parenthesis stirng 

	input  = "a)b(c)d"
	output =  "ab(c)d"


	Approach : 
	1. initalize a stack , sArray of string split with ("")
	2. iterate the sArray char by char 
	3. if char is ( push index of the char to stack 
	4. if char is ")" ,  
		if the stack is empty ,  i mark this char to be removed  on sArray by naking sArray[i] = ""
		if the stack is not empty then  pop the stack 
	5. stack is not empty ,  so iterate over stack and mark "" to be removed even for "("
	5. return sArray.join("") whcih is the new valid stirng with extra paranethesis removed 


	dryRun : 
	s = a)b(c)d
	stack = []

	sArray = a ) b ( c ) ( d 

	i = 0  not  a parenthesis , move 
	i = 1  char = ")"  ,  stack is empty ,  mark ""  sArray = a "" b ( c ) ( d 
	i = 2  not a par
	i = 3  "("  stack = [3]
	i = 4  not a par 
	i = 5  ")" pop stack stack =[]
	i = 6  "(" push it to stack  ,  stack = [6]
	i= 7   not a par 

	stack = [6]

	sArray = a "" b ( c ) "" d 


	res = ab(c)d 


	time compelxity  = O(n)
	space complexity = O(n)  * 2 for the stack and sArray 
*/

function removeInvalidParentesis(s){
	let stack = []
	let sArray = s.split("")

	for(let i =0 ; i < sArray.length; i ++){
		if(sArray[i] === "("){
			stack.push(i)
		}else if(sArray[i]===")"){
			if(stack.length>0) stack.pop()
			else{
				sArray[i]=""
			}
		}
	}

	while(stack.length>0){
		sArray[stack.pop()]=""
	}
	
	return sArray.join("")
}

































