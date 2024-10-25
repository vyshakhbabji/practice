var intervalIntersection = function(firstList, secondList) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < firstList.length && j < secondList.length) {
        let low = Math.max(firstList[i][0], secondList[j][0]);  // max of start times of two intervals
        let high = Math.min(firstList[i][1], secondList[j][1]); // min of end times of two intervals
        if (low <= high) {
            // if the intersection is valid, add it to the result
            result.push([low, high]);
        }
        // move the pointer of the interval which is finishing first
        if (firstList[i][1] < secondList[j][1]) {
            i++;
        } else {
            j++;
        }
    }
    return result;

};