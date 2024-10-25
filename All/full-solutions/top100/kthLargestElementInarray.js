function kthLargest(nums,k){
    const minHeap = new MinHeap()
    for(let n of nums){
        minHeap.push(n)
        if(heap.size() > k ){
            heap.pop()
        }
    }
    return minHeap.peek()
}