// missing number on kth position
// if there was supposed to be a number matching index to array and if its not there ...

function findKthPositive(arr, k ){
    //for non missing integeres  arr[i] = i+1
    // so if arr[i]- (i+1) > 0  this will give how many integers are missing ,
    // eg: lets say [1,2,3,5,6]  at index = 3  ,  arr[3]=5  idx+1 = 4 ;  5-4 =1 missing element

    let low = 0;
    let high = arr.length - 1;
    let missing = -1

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        missing  = arr[mid] - (mid+1)
        if(missing<k){
            low = mid+1
        }
        else{
            high=mid-1
        }
    }

    return low+k;

}

let arr = [2, 3, 4, 7, 11]
let k = 5

console.log(findKthPositive(arr,k))