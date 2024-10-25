var Solution = function(nums) {
    this.nums= nums
};

Solution.prototype.pick = function(target) {
    let res = -1  //initalizing -1 so if target is not found i return -1

    let count  = 0
    for(let i = 0 ; i < nums.length;i++){
        if(nums[i]===target){
            count++
            if(Math.floor(Math.random()*count)){
                res= i
            }
        }
    }
    return res

};



// with count 1 => probabality of returning index 1  is 1/1
//with count 2  => probablity of returning index  0 or 1 is 1/2  = 1/2 which means its either 0 or 1
// with count 3 => probablity of returning index 0 ,1 ,2 is  1/3  = > which means its either 0,1, or 2

// so considering above , chances of retaining the first occurance =
// 1/1 * 1/2 *2/3=> 1/3

//this is the same case for all other indexes

//Refined Explanation Using the "Red Ball" Analogy
// Imagine Balls Representing Duplicates:
//
// Suppose you have an array nums = [2, 3, 2, 4, 2] and you want to randomly pick one of the indices where the number 2 appears.
// Think of each occurrence of 2 as a red ball, and these red balls are placed at different positions in "buckets" representing their indices:
// The red balls are at indices 1, 3, and 5.
// Objective: Pick a Red Ball Randomly with Equal Probability:
//
// The goal is to randomly select one of the red balls such that each ball (each occurrence of 2) has an equal chance of being chosen.
// Since there are 3 red balls, the probability of picking any specific ball should be 1/3.
// Ensuring Equal Probability:
//
// As you traverse the array:
// Each time you encounter a red ball (an occurrence of 2), you treat it as a potential candidate to be picked.
// The algorithm uses the formula if (Math.floor(Math.random() * count) === 0) to determine whether to pick the current red ball.
// This check ensures that the probability of picking any specific red ball is 1/count at each step, where count is the number of red balls encountered so far.
// By the end of the loop, each red ball (occurrence of 2) will have an equal chance (1/3) of being chosen.
// Conclusion:
//
// The process guarantees fairness because each red ball has an equal chance (1/3) of being the final pick due to the random selection mechanism.
// Why This Works
// Randomization Ensures Equal Probability: The random check (Math.random() * count) dynamically adjusts the probability as you encounter each new red ball, maintaining an equal chance of selection.
// Simple and Intuitive Explanation: Your analogy of picking from among the red balls at indices 1, 3, and 5 clearly illustrates the concept that each occurrence has the same chance (1/3) of being selected.