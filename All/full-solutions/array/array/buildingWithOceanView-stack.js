function findBuildings(heights) {
    const stack = [];
    const n = heights.length;

    for(let i = n-1; i>=0 ; i--){
       if(stack.length ===0 || heights[i] > heights[stack[stack.length-1]] ){
        stack.push(i)
       }
    }

    return stack.reverse()
}

// Example usage:
const heights = [4, 2, 3, 1];
console.log(findBuildings(heights)); // Output: [0, 2, 3]
