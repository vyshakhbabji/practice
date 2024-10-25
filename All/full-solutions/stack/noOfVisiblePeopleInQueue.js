function canSeePersonsCount(heights) {
    const n = heights.length;
    const result = Array(n).fill(0);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
        let count = 0;

        // Count how many people the current person can see
        while (stack.length > 0 && heights[i] > stack[stack.length - 1]) {
            stack.pop();
            count++;
        }

        // If there is still someone left in the stack, it means the current person can see them too
        if (stack.length > 0) {
            count++;
        }

        result[i] = count;
        stack.push(heights[i]);
    }

    return result;
}

// Example usage:
const heights = [10, 6, 8, 5, 11, 9];
console.log(canSeePersonsCount(heights)); // Output: [3, 1, 2, 1, 1, 0]
