// Example usage:
let arr1 = [1, 3, 5];
let arr2 = [2, 3, 6];
let arr3 = [0, 4, 5, 6];
console.log(mergeSortedArrays(arr1, arr2, arr3)); // Output: [0, 1, 2, 3, 4, 5, 6]



function mergeSortedArrays(a1  ,a2, a3){

    let p1=0 , p2=0 , p3 = 0
    let lastAdded = -Infinity
    let res = []
    while (p1 < a1.length || p2 < a2.length || p3 < a3.length) {

        let min = Math.min(
            p1 < a1.length ? a1[p1] : Infinity,
            p2 < a2.length ? a2[p2] : Infinity,
            p3 < a3.length ? a3[p3] : Infinity
        );


        if (min > lastAdded) {
            res.push(min);
            lastAdded = min;
        }

        if(a1[p1]===min) p1++
        if(a2[p2]===min)p2++
        if(a3[p3]===min)p3++

    }

    // while(p1<a1.length) res.push(a1[p1++])
    // while(p2<a2.length) res.push(a2[p2++])
    // while (p3<a3.length)res.push(a3[p3++])

    return res

}