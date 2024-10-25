var nextGreaterElement = function(n) {

    let arr = n.toString().split('');
    let i = arr.length - 2;
    // Find the first decreasing digit from the right
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }
    // If no such digit is found, the number is already the largest possible
    if (i < 0) {
        return -1;
    }
    // Find the next greater digit from
    let j = arr.length - 1;
    while (j >= 0 && arr[j] <= arr[i]) {
        j--;
    }
    // Swap the two digits
    [arr[i], arr[j]] = [arr[j], arr[i]];
    let left = i + 1;
    let right = arr.length - 1;
    // Reverse the digits to the right of the swapped digit
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    let result = parseInt(arr.join(''));
    // If the result is greater than the maximum 32-bit signed integer, return -1
    return result > 2 ** 31 - 1 ? -1 : result;
};