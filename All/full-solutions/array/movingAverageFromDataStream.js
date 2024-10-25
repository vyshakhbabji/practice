class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
    }

    next(val) {
        if (this.queue.length === this.size) {
            this.sum -= this.queue.shift(); // Remove the oldest value from the queue
        }
        this.queue.push(val);  // Add the new value to the queue
        this.sum += val;  // Update the sum

        return this.sum / this.queue.length;  // Calculate the moving average
    }
}

// Example usage:
const m = new MovingAverage(3);
console.log(m.next(1)); // Output: 1.0
console.log(m.next(10)); // Output: 5.5
console.log(m.next(3)); // Output: 4.666666666666667
console.log(m.next(5)); // Output: 6.0
