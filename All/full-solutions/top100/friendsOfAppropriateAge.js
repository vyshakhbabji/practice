var numFriendRequests = function(ages) {

    // Sort the ages array
    ages.sort((a, b) => a - b);  // NlogN // [16, 16, 16, 17, 18]
    let count = 0;

    // Loop through the ages array
    for (let i = 0; i < ages.length; i++) {
        // Get the age of the first person
        let ageA = ages[i]; // 16

        // Start from the first person
        let start = i; // 0

        // Find the start of the same age group
        //WHY ? Because we need to skip the same age group
        //If start is greater than 0, keep moving backward (decreasing start) until you reach a position where
        // the age is no longer the same as the current age (ageA).
        while (start > 0 && ages[start - 1] === ageA) {
            start--;
        }

        // Loop through the ages array again
        //If the age of the second person is less than or equal to the age of the first person, increment the count
        for (let j = start; j < ages.length && ages[j] <= ageA; j++) {
            // Get the age of the second person
            let ageB = ages[j]; // 16

            // Skip if the age of the second person is not valid
            //for valid age, ageB should be greater than 0.5 * ageA + 7, ageB should be less than or equal to ageA, and if ageB is greater than 100, ageA should be less than 100.
            if (ageB <= 0.5 * ageA + 7 || ageB > ageA || (ageB > 100 && ageA < 100)) {
                continue;
            }

            // Increment the count if the age of the second person is valid
            count += (j === i) ? 0 : 1; // Skip if same person ... ahhhh this is the key
        }
    }


};




// Time complexity: O(n^2)

// Space complexity: O(1)

let ages = [16, 16, 16, 17, 18];

console.log(numFriendRequests(ages)); // Output: 3


let ages2 = [16, 16, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

console.log(numFriendRequests(ages2)); // Output: 14


