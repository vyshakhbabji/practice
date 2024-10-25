function topKFreqElements(nums,k){

    const freqMap = {}
    for(let n of nums){
        freqMap[n] = (freqMap[n]||0) + 1
    }

    let minHeap = new MinHeap((a,b)=>a[1]-b[1])

    for(let [num,freq] of Object.entries(freqMap)){
        minHeap.push([num,freq])
        if(minHeap.size>k) minHeap.pop()
    }

    let res = []
    while(!minHeap.isEmpty()){
        res.push(minHeap.pop()[0]) // num only
    }
    return res
}