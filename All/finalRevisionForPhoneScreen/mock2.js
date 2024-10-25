/*
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). 
You must also not convert the inputs to integers directly.
Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"

	charcode1 = "7".charCodeAt(0) == 113 - charcode(0)
	charCode2 - "0".charCodeAt(0) === 116 - charcode(0)
	String.fromCharCode(113) === > 7 

	"1" + "5" 
	
	"97" i = 1  
	digit = s[i] // "7" ===> "7" + "3" ==> "73"

	//bitwise === > 
*/

function addDigit(num1 , num2){

	let i=  num1.length-1 , j = nums2.length-1
	let carry = 0
	while(i>=0 || j >=0 || carry>0){

		let digit1 = nums1[i] === undefined ? 0 : nums1[i].charCodeAt(0) - '0'.charCodeAt(0) // 113 - 0'charcode
		let digit2 = nums2[j] === undefined ? 0 : nums2[j].charCodeAt(0) - '0'.charCodeAt(0)

		let sum = digit1+digit2+carry
	
		if(sum>0){
			carry = sum&10
			sum =  Math.floor(sum/10)  
		}

		let charcodeOfSum = String.fromCharCode(sum+'0'.charCodeAt(0)) // "1" +'0'.charCodeAt(0) == 113

		res+= charcodeOfSum+res  

		i--
		j--

	}

	return res 

}




























