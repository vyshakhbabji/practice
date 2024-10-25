var generate = function(numRows) {

    if(numRows === 0) return []
    if(numRows === 1) return [[1]]

    let res = []

    //base case
    res.push([1])

    console.log(res)
    //each row will start with 1 and end with 1
    for(let i=1;i<numRows;i++){

        // Initialize the new row with the first element as 1
        let arr = []

        //add 1 to the begining
        arr.push(1)

        //if numRow > 2 , fill items in the middle from previous row
        // if curRow = 3 ,  prevRow = res[2] =>  res[3-1] => res[i-1]
        // Get the previous row from the result array
        let prevRow = res[i-1]

        // Fill in the middle elements of the current row
        // Each middle element is the sum of the two elements directly above it from the previous row
        // The loop runs from 1 to i-1 to compute the middle elements

        for(let j = 1 ; j < i; j++){
            arr.push( prevRow[j-1]+ prevRow[j])
        }


        //add one to the end
        arr.push(1)

        //add the new row to res
        res.push(arr)

    }
    return  res
};


const numRows = 3
console.log(generate(numRows))