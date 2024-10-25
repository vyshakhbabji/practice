var findRLEArray = function(encoded1, encoded2) {

    let i = 0 ;  j = 0

    let res= []

    while(i<encoded1.length && j <encoded2.length ){

            let [val1, freq1] = encoded1[i]
            let [val2, freq2] = encoded2[j]

            let freq = Math.min(freq1,freq2)
            let val = val1 * val2

            if(freq1<freq2){
                encoded2[j][1]-=freq1
                i++
            }else if(freq1>freq2){
                encoded1[i][1]-=freq2
                j++
            }else{
                i++
                j++
            }

            if(res.length === 0 || res[res.length-1][0] !== val){
                res.push([val,freq])
            }else{
                res[res.length-1][1]+=freq
            }
    }
    return res

};