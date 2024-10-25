function kthLargestElement(nums, k ){
   // explain in plain english what this function does
    // this function takes in an array of numbers and a number k
    // it returns the kth largest number in the array
    // if k is greater than the length of the array, return -1

    //explain how quickselect works
    // quickselect is a variation of quicksort
    // it selects the kth smallest element in an unsorted array
    // it works by selecting a pivot element and partitioning the array
    // such that all elements less than the pivot come before it
    // and all elements greater than the pivot come after it
    // if the pivot index is equal to k, we return the pivot element
    // if the pivot index is less than k, we recursively call quickselect
    // on the subarray greater than the pivot
    // if the pivot index is greater than k, we recursively call quickselect
    // on the subarray less than the pivot

    //time complexity of quickselect is O(n) on average and O(n^2) in the worst case
    //for this problem , time complexity is O(n) on average and O(n^2) in the worst case
}