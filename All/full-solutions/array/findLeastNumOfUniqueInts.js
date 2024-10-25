function findLeastNumOfUniqueInts(arr, k) {
    const freqMap = new Map();

    // Step 1: Count the frequency of each integer in arr
    for (let num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Sort the integers by their frequency
    const sortedFreqs = Array.from(freqMap.values()).sort((a, b) => a - b);

    // Step 3: Remove elements until k elements are removed
    let uniqueCount = freqMap.size;
    for (let freq of sortedFreqs) {
        if (k >= freq) {
            k -= freq;
            uniqueCount--;
        } else {
            break;
        }
    }

    return uniqueCount;
}

// Example input
const arr = [5, 5, 4];
const k = 1;
console.log(findLeastNumOfUniqueInts(arr, k)); // Output should be 1

// Additional test cases
const arr2 = [4, 3, 1, 1, 3, 3, 2];
const k2 = 3;
console.log(findLeastNumOfUniqueInts(arr2, k2)); // Output should be 2

const arr3 = [2, 4, 1, 8, 3, 3, 1, 1, 8, 4];
const k3 = 5;
console.log(findLeastNumOfUniqueInts(arr3, k3)); // Output should be 3
