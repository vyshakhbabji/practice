// missing number on kth position
// if there was supposed to be a number matching index to array and if its not there ...

function findMissingSimple(arr, k ){
    let missing = 0
    let cur  = 1
    let index = 0

    while(index<arr.length){

        let missing = arr[index] - (index+1)  // value at that index -  index ( 9 - (2+1) ) = 6

        if(missing>=k){
            return index + k
        }

        index ++
    }

    return  arr.length + k
}

function findKthPositive2(arr, k) {
    let current = 1;
    let arrIndex = 0;
    let missingCount = 0;

    while (missingCount < k) {
        if (arrIndex < arr.length && arr[arrIndex] === current) {
            arrIndex++;
        } else {
            missingCount++;
            if (missingCount === k) {
                return current;
            }
        }
        current++;
    }
}


function findKthPositive(arr , k){

    const missing = (index) => {
        return arr[index]-index
    }

    let left =  0 ,  right  = arr.length -1

    while (left<=right){
        let mid = Math.floor((left+right) / 2 )

        if(missing(mid) <= k){
            left = mid+1
        }else{
            right = mid -1
        }

    }

    return left + k


}

function kthMissing2Pointer(arr,k){

    let index = 0 // index of arr - each index
    let cur = 1  //1 - XXXX
    let missingCount = 0 // count nu of missing eleents

    // until missing count is equal to k  increment cur
    while(missingCount<k){

        //check if the index and cur same elemennt?
        if(index< arr.length && arr[index] === cur){
            index++
        }else{
            missingCount++
            if(missingCount === k )
                return cur
        }

        cur++
    }
}


let arr = [2, 3, 4, 7, 11]
let k = 5

console.log(findKthPositive(arr,k))