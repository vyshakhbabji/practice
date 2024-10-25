function mergeThreeSortedLists(list1, list2, list3) {
    const result = [];
    let i = 0, j = 0, k = 0;
    let prev = null;

    while (i < list1.length || j < list2.length || k < list3.length) {
        let minValue;

        if (i < list1.length && (j >= list2.length || list1[i] <= list2[j]) && (k >= list3.length || list1[i] <= list3[k])) {
            minValue = list1[i];
            i++;
        } else if (j < list2.length && (k >= list3.length || list2[j] <= list3[k])) {
            minValue = list2[j];
            j++;
        } else if (k < list3.length) {
            minValue = list3[k];
            k++;
        }

        if (minValue !== prev) {
            result.push(minValue);
            prev = minValue;
        }
    }

    return result;
}

// Example usage:
const list1 = [1, 2, 2, 3];
const list2 = [2, 3, 4, 5];
const list3 = [1, 4, 4, 6];

console.log(mergeThreeSortedLists(list1, list2, list3));
// Output: [1, 2, 3, 4, 5, 6]
