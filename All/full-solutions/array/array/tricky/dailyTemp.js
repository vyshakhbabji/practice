function dailyTemp(T) {

    let res  = new Array(T.length).fill(0);

    let stack = [] 

    for(let i = T.length-1 ; i  >= 0 ; i-- ) {
            
        
        //if stack is not empty and if stack contains temps lesser then cur tem pop it 
    

        //update the res with the number of days it took for this index to have the higher temp 

    }

    return res 
    

}


// Example usage:
let T = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemp(T)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]