var intervalIntersection = function(firstList, secondList) {
    //eg: List 1: [[0,2],[5,10],[13,23],[24,25]],
    //    list 2 : [[1,5],[8,12],[15,24],[25,26]]
    //op :          [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]

    let res = []
    let i = 0 , j = 0

    while(i<firstList.length && j<secondList.length){
        let low = Math.max(firstList[i][0], secondList[j][0])
        let high  = Math.min(firstList[i][1], secondList[j][1])
        if(low<=high){
            res.push([low,high])
        }
        if(firstList[i][1] < secondList[j][1]){
            i++
        }else{
            j++
        }
    }
    return res

};