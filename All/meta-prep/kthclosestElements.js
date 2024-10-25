function findClosestElements(arr, k, x) {

};

/*

/*
we need to find k closest elements to given value x in sorted array
distance between elements to x is calculated by abs distance |element-x|
with 2 elements we have 3 senarions
	- a is closer to x                   |a-x| < |b-x|
	- b is closer to x 					 |b-x| < |a-x|
	- a and b are both same distance 	 |a-x| = |b-x|  , here we choose smaller element


as array is sorted lets try to apply binary search
low =0 high = nums.length-k (k elements from right )
mid  = low+high//2

now
	-lets compare x's distane from element at mid vs element at mid+k index
	-if element at mid  is closer to x move high to mid-1
	-else move low to mid +1

in code this is interpreted as while  low<high
	-  |a[mid] - x|  and a[mid+k]-x
	- if(|a[mid] - x| <= a[mid+k]-x ) then high = mid
	- else if(|a[mid] - x| > a[mid+k]-x)  low = mid+1

"Although using Math.abs() is theoretically correct, it loses directionality in cases where the array has duplicate elements."
"When there are duplicates, elements that are equidistant from x will have the
 same absolute difference. Using Math.abs() makes it impossible to determine which direction to move in, which can lead to incorrect results."

"By directly comparing (x - arr[mid]) and (arr[mid + k] - x),
we preserve both distance and direction in our comparison.
This ensures that we correctly handle cases with duplicates and
always choose the k closest elements in the proper order."
 */


