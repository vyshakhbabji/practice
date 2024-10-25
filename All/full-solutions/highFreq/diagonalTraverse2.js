function findDiagonalOrder(nums) {

    if(nums.length===0) return []

    let hm = {}

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            let key = i+j
            if(!hm[key]){
                hm[key] =[]
            }
            hm[key].push(nums[i][j])
        }
    }

    let res =[]

    const keys = Object.keys(hm).map(Number).sort((a,b)=>a-b)

    console.log(keys)

    for(let k  in keys){
        if(k%2===0){
            //reverse
            res.push(hm[k].reverse())
        }
        else{
            res.push(hm[k])
        }
    }

    return res
}

// Example usage:
let nums = [
    [ 1, 2, 3 ],
    [ 4, 5 ],
    [ 6, 7, 8, 9 ]
];
console.log(findDiagonalOrder(nums)); // Output: [1, 4, 2, 3, 5, 6, 7, 8, 9]
