var findDiagonalOrder = function(nums) {

    let map = {}
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = 0 ; j < nums[i].length ; j++){
            let  key = i+j
            if(!(key in map )) map[key]=[]
            map[key].push(nums[i][j])
        }
    }
    console.log(map)
    let res = []
    Object.entries(map).sort((a,b)=>{a[0]-b[0]}).forEach(([k,v])=>{
        res.push(...v.reverse())
    })
    return res
};

let nums = [[32,38,28,38,15,6,13],[15,38,5,21,8,22],[22,35,8,7,33,3,19,27],[38,11,39,11,13,11,12,3,22,2],[32,27,12,5,9,32],[24,39,31,40,30,15,20],[22,19,12,7,37,1,4,11]]
console.log(findDiagonalOrder(nums))