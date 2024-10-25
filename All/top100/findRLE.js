var findRLEArray = function(encoded1, encoded2) {
    let i = 0 , j = 0
    let res = []
    while(i<encoded1.length  && j<encoded2.length){

        let [val1,freq1] = encoded1[i]
        let [val2,freq2] = encoded2[j]

        let newVal = val1*val2
        let newFreq = Math.min(freq1,freq2)

        if(freq1>freq2){
            encoded1[i][1]-=freq2  // instead of reducing frequencey of the freq , reduce encoded directly
            j++
        }else if(freq1<freq2){
            encoded2[j][1]-=freq1  // instead of reducing frequencey of the freq , reduce encoded directly
            i++
        }else if(freq1===freq2){
            i++
            j++
        }

        if(res.length>0 && res[res.length-1][0] === newVal ){
            res[res.length-1][1]+=newFreq
        }else{
            res.push([newVal,newFreq])
        }
    }

    return res

};

/*

Output: [[6,6]]
encoded1 = [[1,3],[2,3]], encoded2 = [[6,3],[3,3]]
                    i                         j
Iteration :
i=0 , j=0
product  = 1*6  = 6
freq  = 3, 3  3 ===3  so , min of 3,3 => 3
res = [[6,3]]

i++ j ++

Iteration :
i = 1 j = 1
product  = 2*3  = 6
freq  = 3, 3 =>  3===3 so, min of 3,3  => 3    res = [6,3] [6,3]
res contains 6,3  and here the new encoded array is 6,3 so , it will become [[6,6]]
op = res = [[6,6]]


Output: [[2,3],[6,1],[9,2]]
Input: encoded1 = [[1,3],[2,1],[3,2]], encoded2 = [[2,3],[3,3]]
                                 i                         j

i=0 j = 0   encoded1 = [1,3] encoded2= [2,3]     product = 2 freq =3                res= [2,3]            i++ j ++
i=1 j = 1   encoded1 = [2,1] encoded2= [3,3]     product  = 6 freq => min 3,1= 1    res = [2,3] [6,1]     increment only i when compared to freq2>freq1 i++ new encoded2 = [3, 3-1]
i=2 j = 1   encoded1 = [3.2] encoded2= [3.2]     product = 9  freq => min 2,2       res = [2,3] [6,1] [9,2] i++ j ++
*/