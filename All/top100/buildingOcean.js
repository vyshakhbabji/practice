var findBuildings = function(heights) {
    let maxHeight=-Infinity
    let res = []
    for(let i = heights.length-1 ; i >=0 ; i--){
        if(heights[i]>maxHeight){
            maxHeight = heights[i]
            res.push(i)
        }
    }
    return res.reverse()
};

let heights = [4,2,3,1]


//dryrun
/*
heights = [4,2,3,1]
indexes = [0,1,2,3]

iteration  i = 3
maxHeight = - Infinity , height[3] > maxHeight => 1 > -Infinity  true  => res = [3]

iteration  i = 2
maxHeight = - Infinity , height[2] > maxHeight => 3 > 1  true  => res = [3,2]

iteration  i = 1
maxHeight = - Infinity , height[1] > maxHeight => 2 > 3  false  => res = [3,2]

iteration  i = 0
maxHeight = - Infinity , height[0] > maxHeight => 4 > 3  true  => res = [3,2,0]



*/