function countHillValley(nums) {
    // Clean the array and remove consecutive duplicates
    let cleanedArray = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i + 1]) {
            cleanedArray.push(nums[i]);
        }
    }

    // Initialize the count of hills and valleys
    let countHill = 0;
    let countValley = 0;

    // Loop through the cleaned array to count the hills and valleys
    for (let i = 1; i < cleanedArray.length - 1; i++) {

        // check adjacent elements to determine if it's a hill or valley
        if (cleanedArray[i] > cleanedArray[i - 1] && cleanedArray[i] > cleanedArray[i + 1]) {
            countHill++;
        } else if (cleanedArray[i] < cleanedArray[i - 1] && cleanedArray[i] < cleanedArray[i + 1]) {
            countValley++;
        }
    }

    // Return the count of hills and valleys
    return [countHill, countValley];
}

let nums = [2, 4, 1, 1, 6, 5];
console.log(countHillValley(nums)); // [1, 1]

nums = [1, 2, 3, 4, 5];
console.log(countHillValley(nums)); // [0, 0]