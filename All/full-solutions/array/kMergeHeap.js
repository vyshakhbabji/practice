
function mergeSortedArrays(arrs) {

    let res = []
    const minHeap = new MinHeap()

    for(let i= 0 ; i< arrs.length; i++){

        //for each array add first element to heap
        if(arrs[i].length>0){
            minHeap.insert({
                val: arrs[i][0] ,
                arrayIndex:i ,  /// to tracck whch array to process
                elementIndex:0 // to track whcih element to process in the chosen array from arrayIndex
            })
        }
    }


    while(!minHeap.isEmpty()){
        const {val, arrayIndex, elementIndex } = minHeap.extractMin()
        res.push(val)

        if(elementIndex+1 < arr[arrayIndex].length){
            minHeap.insert({
                val:arr[arrayIndex][elementIndex+1],
                arrayIndex : arrayIndex,
                elementIndex: elementIndex +1
            })
        }

    }




}

// Example usage:
let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6];
let arr3 = [0, 4, 5, 6];
console.log(mergeSortedArrays([arr1, arr2, arr3])); // Output: [0, 1, 2, 3, 4, 5, 6]

