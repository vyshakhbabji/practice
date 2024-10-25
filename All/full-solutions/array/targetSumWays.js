function targetSumWays(nums, target) {


    const memo = {}

    function dfs (index , curSum){

        //base case
        //if the index === len of nums array
        if(index===nums.length){
            if(curSum === target){
                return 1
            }
            else
                return 0
        }

        const key = `${index}-${curSum}`

        //if result is already stored ,  then return the result so u dont have to go through the add/sub
        if(memo[key]!=null)
            return memo[key]

        const add = dfs(index+1, curSum+nums[index])
        const sub = dfs(index+1, curSum-nums[index])

        const ways = add + sub

        //save ways in memo
        memo[key] = ways

        return ways

    }

    return dfs(0, 0)
}

// DFS => 2D array solution  dp[i][j]

//
function findTargetSumWays2Ddp(nums, target) {
    const sum = nums.reduce((a, b) => a + b, 0);

    // If the target is not achievable
    if ((target + sum) % 2 !== 0 || sum < Math.abs(target)) {
        return 0;
    }

    const targetSum = (target + sum) / 2;

    // Initialize dp array
    const dp = Array(nums.length + 1).fill(null).map(() => Array(targetSum + 1).fill(0));
    dp[0][0] = 1; // One way to reach 0 sum with 0 elements

    for (let i = 1; i <= nums.length; i++) {
        for (let j = 0; j <= targetSum; j++) {
            if (j >= nums[i - 1]) {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - nums[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    return dp[nums.length][targetSum];
}




function dpTargetSumWays(nums, target){
    let sum = 0
    nums.forEach(n=>sum+=n)

    //derive fesability
    /*
         from question
         sum(P)-sum(N) = target

         //add sum(nums) = sum(p)+sum(n) on both sides

         sum(P)-sum(N) + sum(P)+sum(N) = target+ sum(P)+sum(N)

         2(sum(P) = target + sum(nums)

         sum(p) = target + sum (nums) // 2

         the above is if the sum is even number

         target sum can be full sume or less then full sum

         target <= sums[nums]

     */

    //  complete this when u have time



}

function findTargetSumWaysDP(nums, target) {
    const sum = nums.reduce((a, b) => a + b, 0);

    // If the target is not achievable
    if ((target + sum) % 2 !== 0 || sum < Math.abs(target)) {
        return 0;
    }

    const targetSum = (target + sum) / 2;

    // Initialize dp array
    const dp = Array(targetSum + 1).fill(0);
    dp[0] = 1; // One way to reach 0 sum

    for (let num of nums) {
        for (let j = targetSum; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }

    return dp[targetSum];
}


const nums= [1,1,1,1,1]
const target = 3

console.log(targetSumWays(nums, target))