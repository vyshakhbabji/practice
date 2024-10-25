function numEquivDominoPairs(dominoes) {
    const map = new Map();
    let count = 0;

    for (let [a, b] of dominoes) {
        // Normalize the domino so that the smaller number comes first
        const key = a < b ? `${a},${b}` : `${b},${a}`;

        // If the key is already in the map, increment the count by the current value
        if (map.has(key)) {
            count += map.get(key);
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }

    return count;
}

// Example usage:
console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])); // Output: 1
console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]])); // Output: 3
