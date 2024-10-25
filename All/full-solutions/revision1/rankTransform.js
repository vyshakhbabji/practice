const arrayRankTransform = (arr) => {

    let max= Math.max(...arr)
    let min= Math.min(...arr)

    let rank = {}

    //create array with size max-min+1
    let present  = Array(max-min+1).fill(false)

    //fill this array with number present or not

    for(let i=0;i<arr.length; i++){
        present[arr[i]-min] = true
    }

    let r = 1

    for(let i = 0 ; i < present.length ; i++){
        if(present[i]) {
            rank[i+min] = r
            r++
        }
    }

    return Object.values(rank)

}