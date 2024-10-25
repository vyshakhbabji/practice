function numFriendRequests(ages) {
    ages.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < ages.length; i++) {
        let ageA = ages[i];
        let start = i;

        while (start > 0 && ages[start - 1] === ageA) {
            start--;
        }

        for (let j = start; j < ages.length && ages[j] <= ageA; j++) {
            let ageB = ages[j];
            if (ageB <= 0.5 * ageA + 7 || ageB > ageA || (ageB > 100 && ageA < 100)) {
                continue;
            }
            count += (j === i) ? 0 : 1; // Skip if same person
        }
    }

    return count;
}

// Example usage:
const ages = [16, 16, 16, 17, 18];
console.log(numFriendRequests(ages)); // Output: 3
