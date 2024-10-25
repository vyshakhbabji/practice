function mergeSortedArray (a,b,c){

    let i = 0 ; j = 0 ; k = 0
    let lastused = null
    let res=[]
    while(
        i<a.length ||
        j<b.length ||
        k<c.length
        ){

        let val1 = i<a.length?a[i] : Infinity
        let val2 = j<b.length?b[j]: Infinity
        let val3 = k < c.length?c[k]:Infinity

        let min = Math.min(val1, val2, val3)
        if(min!==lastused){
            res.push(min)
            lastused = min
        }

        if( i<a.length && min===a[i]){
            i++
        }else if(j< b.length && min===b[j]) {
            j++
        }else if(k < c.length && min===c[k]) {
            k++
        }
    }
    return res
}