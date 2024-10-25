function findBuildingsWithOceanView(heights){
    
    let max = 0
    let res  = [] 
    for(let i = heights.length-1 ; i >=0 ; i --){
        if(heights[i]>=max){
            max = heights[i]
            res.push(i)
        }
    }

    return res.reverse()

}


// Example usage:
let heights = [4, 2, 3, 1];
console.log(findBuildingsWithOceanView(heights)); // Output: [0, 2, 3]