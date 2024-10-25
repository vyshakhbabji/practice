var hIndex = function(citations) {
    //lowest bounds of citations is what we need to find 
    //  low =0 , high = citations.length  // iterate over each citation 
    // each can have anywhere between 0 and 6 citations
    // we need to find  h papers h times. ====> 1 : 0times   1:1 time 2paper :3 times 3 papar 5 time , 4 paper 6 time
    // we have 3 papers atleast 3 time  2,3,4 
    //citations[idx] >= n-idx
    let n = citations.length
    let low = 0 ,  high = citations.length-1
    let res= n 
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(citations[mid]>= n - mid){
            res = mid 
            high = mid-1
        }else{
            low = mid+1
        }
    }
    return res 
};