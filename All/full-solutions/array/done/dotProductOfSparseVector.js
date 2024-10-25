/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.data = {}
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i]!=0){
            this.data[i] = nums[i]
        }
    }


};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {

    let res = 0
    for(let key in this.data){
        if( key in  vec.data ){
            res+= this.data[key] * vec.data[key]
        }
    }


};


// Your SparseVector object will be instantiated and called as such:
let nums1 = [1, 0, 0, 2, 3];
let nums2 = [0, 3, 0, 4, 0];
let v1 = new SparseVector(nums1);
let v2 = new SparseVector(nums2);
let ans = v1.dotProduct(v2);
console.log(ans); // Output: 8

let nums3 = [0, 1, 0, 0, 0];
let nums4 = [0, 0, 0, 0, 2];
let v3 = new SparseVector(nums3);
let v4 = new SparseVector(nums4);
console.log(v3.dotProduct(v4)); // Output: 0

let nums5 = [1, 0, 0, 0, 2, 0, 0];
let nums6 = [0, 0, 0, 0, 3, 0, 4];
let v5 = new SparseVector(nums5);
let v6 = new SparseVector(nums6);
console.log(v5.dotProduct(v6)); // Output: 6
