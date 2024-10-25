var findClosestElements = function(arr, k, x) {

    let l = 0 ,r  = arr.length-1
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(x- arr[mid] > arr[mid+k] - x) {    //or  arr[mid+k] + arr[mid] > 2*x
                l =mid+1
        }
        else {
                r= mid-1
        }
    }
    return nums.slice(l,l+k)
};