var findMissingRanges = function(nums, lower, upper) {

    //this is for finding the begining of the range ,,, -1 is used so it gets corrected when adding to res
    let prev = lower-1
    let res = []

    for(let i = 0 ; i<=nums.length; i++){

        //this is to make the ranges  ..  cur is for finding the end of ranges its either number itself or upper limit
        let cur = (i<nums.length)? nums[i] : upper+1

        if(cur-prev >= 2){
            res.push([formatRange(prev+1, cur-1)])
        }
        prev = cur
    }
    return res

};

function formatRange(start, end){
    if(start===end){
        return `${start}`
    }
    else{
        return `${start}->${end}`
    }
}

// Example input
const nums = [0, 1, 3, 50, 75];
const lower = 0;
const upper = 99;
console.log(findMissingRanges(nums, lower, upper));
// Output should be ["2", "4->49", "51->74", "76->99"]