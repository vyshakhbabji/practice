function findMaxQualitySum(packets, channels) {
    //Each pakcet must be sent via single channel each of the channels must transfer atleast on3e packet .
    // the quality of transfer for channel by the median of the sizes of all the data packets sent through that channel .
    // the median of the array is middle elemenmt if the array is sorted in non decreasing order.
    // iof the number of element sin the array is even , the median is acerage of 2 middle elements .
    //
    // Fidn the maximum possible sum of the qualityes of all the chanels . igf the answe is floating point vlaies it can round it to bext higher integer .
    //
    // packets ,2,3,4,5 channels 2
    //
    // fatleast one packet has to go through each of the 2 channels ., maxinla solution to the trasfer packets 1 2 3 4 thorugh channel 1 and packet 5 through channel 2


    function median(arr){
        arr.sort((a,b)=>a-b)
        let n = arr.length
        if(n%2===0){
            return (arr[n/2]+arr[n/2-1])/2
        }
        return arr[Math.floor(n/2)]
    }

    let n = packets.length

    if(n<=channels){
        return packets.reduce((a,b)=>a+b,0)
    }

    let dp = Array(n+1).fill(null).map(()=>Array(channels+1).fill(0))

    for(let i=1;i<=n;i++){
        dp[i][1] = dp[i-1][1]+packets[i-1]
    }

    for(let i=1;i<=n;i++){
        for(let j=2;j<=channels;j++){
            let max = 0
            for(let k=i;k>0;k--){
                let quality = median(packets.slice(k-1,i))
                max = Math.max(max,dp[k-1][j-1]+quality)
            }
            dp[i][j] = max
        }
    }

    console.log(dp)
    return Math.ceil(dp[n][channels])



}

// Test cases
const  packets = [5, 2, 2, 1, 5, 3]
const channels =  2;

console.log(findMaxQualitySum(packets, channels));
