var Solution = function(w) {
    let sum = 0
    this.prefixSum = []
    this.totalSum = 0
    for(let i = 0 ;i <w.length; i++){
        sum+=w[i]
        this.prefixSum.push(sum)
    }
    this.totalSum = sum
};

Solution.prototype.pickIndex = function() {
    let l = 0 , r= this.prefixSum.length-1
    let target = Math.floor(Math.random()*this.totalSum)
    while (l<=r){
        let m = Math.floor((l+r)/2)
        if(this.prefixSum[m] <= target){
            l = m+1
        }
        else{
            r = m-1
        }
    }
    return l
};

//When the random target is chosen, it is selected within the total cumulative range determined by the weights.
// The prefix sum array maps each weight to a portion of this range, and binary search determines which index's
// range contains the random target. This ensures that each index is chosen with a probability proportional
// to its weight, making the selection process fair and weighted correctly.


//Explanation Using the Colored Balls Example
// Understanding the Weights:
//
// You have 3 red, 5 blue, and 2 yellow balls in a bucket. The weights are determined by the number of balls of each color:
// Red: 3 balls
// Blue: 5 balls
// Yellow: 2 balls
// The total number of balls (and thus the total weight) is 3 + 5 + 2 = 10.
// Mapping to a Cumulative Range Using Prefix Sums:
//
// You want to randomly choose a ball, but the probability of picking a ball of a particular color should be proportional to the number of balls of that color.
// Create a prefix sum array to represent cumulative weights:
// After 3 red balls: prefixSum[0] = 3 (Range for red is [0, 3))
// After 5 blue balls: prefixSum[1] = 3 + 5 = 8 (Range for blue is [3, 8))
// After 2 yellow balls: prefixSum[2] = 8 + 2 = 10 (Range for yellow is [8, 10))
// Randomly Choosing a Target:
//
// To randomly select a ball, you generate a random number (target) between 0 and total (10).
// The target represents a random point within the cumulative range determined by the prefix sums.
// Binary Search to Determine the Color:
//
// You use binary search to find the smallest index i such that prefixSum[i] > target.
// This index i corresponds to the color of the ball:
// If target is between 0 and 3, you pick a red ball.
// If target is between 3 and 8, you pick a blue ball.
// If target is between 8 and 10, you pick a yellow ball.
// Ensuring Probability Based on Weights:
//
// Since the ranges are determined by the cumulative weights, the probability of the target falling within each range is proportional to the number of balls of that color:
// Red: Probability is 3/10 (because the range [0, 3) has length 3).
// Blue: Probability is 5/10 (because the range [3, 8) has length 5).
// Yellow: Probability is 2/10 (because the range [8, 10) has length 2)