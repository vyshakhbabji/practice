function canShip(weights, D, capacity) {
    let days = 1; // Start with one day
    let currentLoad = 0;

    for (let weight of weights) {
        if (currentLoad + weight > capacity) {
            // Start a new day
            days++;
            currentLoad = weight;
            if (days > D) return false; // Too many days needed
        } else {
            currentLoad += weight;
        }
    }

    return true;
}

function shipWithinDays(weights, D) {
    let left = Math.max(...weights); // Minimum possible capacity
    let right = weights.reduce((a, b) => a + b, 0); // Maximum possible capacity

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canShip(weights, D, mid)) {
            right = mid; // Try a smaller capacity
        } else {
            left = mid + 1; // Increase the capacity
        }
    }

    return left;
}

// Example usage:
const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const D = 5;
console.log(shipWithinDays(weights, D)); // Output: 15
