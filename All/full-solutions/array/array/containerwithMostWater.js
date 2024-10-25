/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let maxArea = 0

    let l = 0 , r = height.length-1

    while(l<r){

        let h  = Math.min(height[l] , height[r])
        let w = r-l

        maxArea = Math.max(maxArea , w*h)

        if(height[l]<height[r]){
            l++
        }
        else{
            r--
        }

    }

    return maxArea

};

// Test cases
let height1 = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height1)); // Output: 49

let height2 = [1,1];
console.log(maxArea(height2)); // Output: 1

let height3 = [4,3,2,1,4];
console.log(maxArea(height3)); // Output: 16

let height4 = [1,2,1];
console.log(maxArea(height4)); // Output: 2
