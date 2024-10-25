//Given an integer array and limit number.
// Print numbers in a certain level of lines where a comma separates numbers and each line length must fit in the limit.
// In addition, each line must finish with a comma except for the last line. The comma is counted in the line length.


function printNumbersInLines(arr, limit) {
    let result = [];
    let currentLine = [];
    let currentLength = 0;

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i].toString();
        if (currentLength + number.length + 1 <= limit) {
            currentLine.push(number);
            currentLength += number.length + 1;
        } else {
            result.push(currentLine.join(',') + ',');
            currentLine = [number];
            currentLength = number.length;
        }
    }

    if (currentLine.length > 0) {
        result.push(currentLine.join(','));
    }

    return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let limit = 10;
console.log(printNumbersInLines(arr, limit)); // [ '1,2,3,4,', '5,6,7,', '8,9' ]

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
limit = 5;
console.log(printNumbersInLines(arr, limit)); // [ '1,2,', '3,4,', '5,6,', '7,8,', '9' ]

