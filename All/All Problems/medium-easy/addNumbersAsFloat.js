function addNumbers(s , t ){

	return add(s,t)

}


function add(n1, n2){

	let carry = 0 

	let i = n1.length-1 , j = n2.length-1

	let res = []
	while(i>=0 || j >=0 || carry>0){
		let digit1 = n1[i]!==undefined ? 0 : parseInt(n1[i])
		let digit2 = n2[j]!==undefined ? 0 : parseInt(n2[j])

		let sum = digit1+digit2+carry

		if(sum>10) carry = Math.floor(sum/10)
		sum = sum % 10 
		res.unshift(sum)
	}


	return res 

}

console.log("9","10")