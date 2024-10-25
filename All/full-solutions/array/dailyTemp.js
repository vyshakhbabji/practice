function dailyTemp(T) {
    let res = new Array(T.length).fill(0); // Initialize result array with zeros
    let stack = []; // Stack to store indices

    for (let i = T.length - 1; i >= 0; i--) {
        // Pop elements from the stack until a warmer temperature is found
        while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
            stack.pop();
        }

        // If the stack is not empty, calculate the difference in days
        if (stack.length) {
            res[i] = stack[stack.length - 1] - i;
        }

        // Push the current index onto the stack
        stack.push(i);
        console.log(res)
    }
    return res;
}


// Example usage:
let T = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemp(T)); // Output: [1, 1, 4, 2, 1, 1, 0, 0]


/*
Dry run
T = [73, 74, 75, 71, 69, 72, 76, 73]
ind=  0   1   2   3   4   5   6   7

res = [0, 0, 0, 0, 0, 0, 0, 0]
stack = []

i=7
stack = [7]
res = [0, 0, 0, 0, 0, 0, 0, 0]

i=6
stack = [7, 6]
res = [0, 0, 0, 0, 0, 0, 0, 0]

i=5
stack = [7, 6, 5]
res = [0, 0, 0, 0, 0, 0, 0, 0]

i=4
stack = [7, 6, 5, 4]
res = [0, 0, 0, 0, 0, 0, 0, 0]

i=3
stack = [7, 6, 5, 4, 3]
res = [0, 0, 0, 0, 0, 0, 0, 0]

i=2
stack = [7, 6, 5, 4, 3, 2]
res = [0, 0, 0, 0, 0, 0, 0, 0]

i=1
stack = [7, 6, 5, 4, 3, 2, 1]
res = [0, 0, 0, 0, 0, 0, 0, 0]

i=0
stack = [7, 6, 5, 4, 3, 2, 1, 0]
res = [0, 0, 0, 0, 0, 0, 0, 0]

res = [1, 1, 4, 2, 1, 1, 0, 0]


 */