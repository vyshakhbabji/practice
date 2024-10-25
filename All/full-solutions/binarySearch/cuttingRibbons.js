function canCut(ribbons, k, length) {
    let pieces = 0;
    for (let ribbon of ribbons) {
        pieces += Math.floor(ribbon / length);
    }
    return pieces >= k;
}

function maxLength(ribbons, k) {
    let left = 1;
    let right = Math.max(...ribbons);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (canCut(ribbons, k, mid)) {
            left = mid + 1; // Try for a longer length
        } else {
            right = mid - 1; // Try for a shorter length
        }
    }

    return right; // This is the maximum length we found that works
}

// Example usage:
const ribbons = [9, 7, 5];
const k = 3;
console.log(maxLength(ribbons, k)); // Output: 5
