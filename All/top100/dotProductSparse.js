var SparseVector = function(nums) {
    this.data = {}
    for(let i = 0 ; i<nums.length; i ++){
        if(nums[i]!==0){
            this.data[i]= nums[i]
        }
    }
};

SparseVector.prototype.dotProduct = function(vec) {
    let res = 0
    for(let  k  in this.data){
        if(k in vec.data){
            res+=this.data[k] * vec.data[k]
        }
    }
    return res
};
