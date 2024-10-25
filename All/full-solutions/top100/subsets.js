
function subsets(nums){

    let res = []

    function dfs (index, cur ){
        res.push([...cur])
        for(let i = index ; i<nums.length; i++){
            cur.push(nums[i])
            dfs(i+1, cur)
            cur.pop()
        }

    }

    dfs(0,[])

    return res

}

//test cases

let nums1 = [1,2,3];
console.log(subsets(nums1)); //Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// let nums2 = [0];
// console.log(subsets(nums2)); //Output: [[],[0]]
//
// let nums3 = [];
// console.log(subsets(nums3)); //Output: [[]]
//
// let nums4 = [1,2,3,4];
// console.log(subsets(nums4)); //Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3],[4],[1,4],[2,4],[1,2,4],[3,4],[1,3,4],[

//o(*2^n) time complexity