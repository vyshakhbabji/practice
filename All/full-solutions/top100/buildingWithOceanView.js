function buildingWithOceanView(heights){

    let res = []
    let max = -Infinity
    for(let i = heights.length-1 ; i >= 0 ; i--){
        if(heights[i]>max){
            max = heights[i]
            res.push(i)
        }
    }

    return res

}

//stack approach
function buildingWithOceanView(heights) {
    let stack = [];

    for (let i = heights.length - 1; i >= 0; i--) {
        if (stack.length === 0 || heights[i] > heights[stack[stack.length - 1]]) {
            stack.push(i);
        }
    }

    return stack.reverse();

}



//input
const arr = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(buildingWithOceanView(arr)); // Output: [4, 3, 1]

//additional test cases

const arr2 = [4, 3, 2, 1];
console.log(buildingWithOceanView(arr2)); // Output: [4]