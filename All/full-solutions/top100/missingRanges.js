var findMissingRanges = function(nums, lower, upper) {

    let prev = -1
    let cur  = 0
    let res = []

    for(let i = 0 ; i <=upper ; i++){
        if(nums[i]<=upper) cur = nums[i]
        else cur = upper+1

        if(cur-prev>1){
            res.push(formatRanges(prev+1, cur-1))
        }
        prev = cur

    }



    function formatRanges(start, end){
        if(start===end){
            return [start , end]
        }
        return [start, end]
    }

    return res
};


//Test Cases

let nums = [0, 1, 3, 50, 75];
let lower = 0;
let upper = 99;
console.log(findMissingRanges(nums, lower, upper)); //Output: ["2", "4->49", "51->74", "76->99"]

let nums2 = [];
let lower2 = 1;
let upper2 = 1;
console.log(findMissingRanges(nums2, lower2, upper2)); //Output: ["1"]


let nums3 = [];
let lower3 = -3;
let upper3 = -1;
console.log(findMissingRanges(nums3, lower3, upper3)); //Output: ["-3->-1"]