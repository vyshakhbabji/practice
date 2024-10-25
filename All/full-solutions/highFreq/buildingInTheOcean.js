var findBuildings = function(heights) {
    let max = -Infinity
    let res= []
    for(let i = heights.length-1; i>=0 ; i--){
        if(max<heights[i]){
            res.push(i)
            max=heights[i] // update height only when it meets the condition
        }
    }
    return res.reverse()
};


console.log(findBuildings([2,2,2,2]))