function findBuildings(heights) {
    const stack = [];
    const n = heights.length;

    for (let i = n - 1; i >= 0; i--) {
        // If the current building is taller than the last building in the stack
        if (stack.length === 0 || heights[i] > heights[stack[stack.length - 1]]) {
            stack.push(i); // Add it to the stack
        }
    }

    // Since we added buildings from right to left, reverse the stack to get the correct order
    return stack.reverse();
}

// Example usage:
const heights = [4, 2, 3, 1];
console.log(findBuildings(heights)); // Output: [0, 2, 3]
