function nestedListWeightSum(nestedList){


    let res = []

    function nestedListHelper(list , depth){
        for(let n of list){
            if(Array.isArray(n)){
                nestedListHelper(n ,depth+1)
            }else {
                res.push(n*depth)
            }
        }
    }

    nestedListHelper(nestedList , 1)

    return res.reduce((a,b)=>a+b)

}


let nestedList = [[1,1],2,[1,1]]
console.log(nestedListWeightSum(nestedList))