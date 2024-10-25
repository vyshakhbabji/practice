function arrayRankTransform(arr) {
    // Step 1: Create a sorted copy of the array with original indices
    let sorted = arr.slice().sort((a, b) => a - b);

    // Step 2: Create a map to hold the ranks
    let rankMap = {};
    let rank = 1;

    // Step 3: Assign ranks based on sorted order
    for (let num of sorted) {
        if (!(num in rankMap)) {
            rankMap[num] = rank;
            rank++;
        }
    }

    // Step 4: Transform the original array into ranks
    let result = arr.map(num => rankMap[num]);

    return result;
}

// Example usage
const arr = [40, 10, 20, 30];
console.log(arrayRankTransform(arr)); // Output: [4, 1, 2, 3]

const arr2 = [100, 100, 100];
console.log(arrayRankTransform(arr2)); // Output: [1, 1, 1]

const arr3 = [37, 12, 28, 9, 100, 56, 80, 5, 12];
console.log(arrayRankTransform(arr3)); // Output: [5, 3, 4, 2, 8, 6, 7, 1, 3]


// Example usage:
console.log(arrayRankTransform([40, 10, 20, 30])); // Output: [4, 1, 2, 3]
// console.log(arrayRankTransform([100, 100, 100])); // Output: [1, 1, 1]
// console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12])); // Output: [5, 3, 4, 2, 8, 6, 7, 1, 3]
