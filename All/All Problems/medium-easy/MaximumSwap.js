/*
MaximumSwap 
	
	Approach : 
	1. Split the digits by converting it to string arr
	2. initialize idxArr and idx as a pointer to indexes in idxArr starting from len of digits  
	3. Run a loop from the right to left on digits arr
	4. if digit[i] > digit[idx] ,  get the idx of the digit and  assign idx to i and set idxArr[i] = idx  // this captures largest digit so far 
	5. Now we have indeds of digits based on thier unti value 
	6 now run loop from left to right on digits and if digit[i]<digiti[idxArr[i]] swap those digits and break the loop
	Time O(n) and space O(n)
*/