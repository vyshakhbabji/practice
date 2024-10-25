function firstandLastPosOfElement(nums,target){

}


let nums = [5,7,7,8,8,10];


/*
dry run
input: [5,7,7,8,8,10], 8
output: [3,4]

arr            [5,7,7,8,8,10]
ind             0 1 2 3 4 5

first occurence of 8 is at index 3
last occurence of 8 is at index 4

//apply binary search to find first occurence
//apply binary search to find last occurence

first occurence  k = 8
low = 0 high = 5 mid = 2  arr[mid] = 7
low = 3 high = 5 mid = 4 arr[mid] = 8
low = 3 high = 3 mid = 3 arr[mid] = 8
return 3

last occurence k = 8
low = 0 high = 5 mid = 2  arr[mid] = 7
low = 3 high = 5 mid = 4 arr[mid] = 8
low = 5 high = 5 mid = 5 arr[mid] = 10
low = 5 high = 4 mid = 4 arr[mid] = 8
return 4

return [3,4]

formula for first occurence
if mid == target and mid-1 != target or mid == 0 return mid
if mid < target return binarySearch(mid+1,high)
else return binarySearch(low,mid-1)

formula for last occurence
if mid == target and mid+1 != target or mid == n-1 return mid
if mid > target return binarySearch(low,mid-1)
else return binarySearch(mid+1,high)
 */