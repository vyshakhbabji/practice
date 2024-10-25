class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(element) {
        this.heap.push(element);
        this.bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp() {
        let index = this.size() - 1;
        const element = this.heap[index];

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];

            if (element[0] >= parent[0]) break;

            this.heap[index] = parent;
            index = parentIndex;
        }

        this.heap[index] = element;
    }

    bubbleDown() {
        let index = 0;
        const length = this.size();
        const element = this.heap[index];

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftChildIndex < length) {
                const leftChild = this.heap[leftChildIndex];
                if (leftChild[0] < element[0]) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                const rightChild = this.heap[rightChildIndex];
                if (
                    (swapIndex === null && rightChild[0] < element[0]) ||
                    (swapIndex !== null && rightChild[0] < this.heap[swapIndex][0])
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;

            this.heap[index] = this.heap[swapIndex];
            index = swapIndex;
        }

        this.heap[index] = element;
    }
}

function minimumEffortPath(heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1]
    ];

    const effort = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
    effort[0][0] = 0;

    const minHeap = new MinHeap();
    minHeap.push([0, 0, 0]); // [effort, row, col]

    while (minHeap.size() > 0) {
        const [currentEffort, row, col] = minHeap.pop();

        if (row === rows - 1 && col === cols - 1) {
            return currentEffort;
        }

        for (const [dr, dc] of directions) {
            const newRow = row + dr;
            const newCol = col + dc;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                const newEffort = Math.max(currentEffort, Math.abs(heights[newRow][newCol] - heights[row][col]));

                if (newEffort < effort[newRow][newCol]) {
                    effort[newRow][newCol] = newEffort;
                    minHeap.push([newEffort, newRow, newCol]);
                }
            }
        }
    }

    return -1;
}

// Example usage:
const heights = [
    [1, 2, 2],
    [3, 8, 2],
    [5, 3, 5]
];
console.log(minimumEffortPath(heights)); // Output: 2
