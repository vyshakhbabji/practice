//no weights
var Solution = function(nums) {

    //fill the map with indices
    this.nums = {}
    for(let i=0;i<nums.length;i++){
        if(!this.nums[nums[i]]){
            this.nums[nums[i]] = []
        }
        this.nums[nums[i]].push(i)
    }

};

Solution.prototype.pick = function(target) {
    //if the target is not in the map return -1
    if(!this.nums[target]) return -1
    //get the indices of the target and find length of the indices
    let indices = this.nums[target]
    let len = indices.length
    //generate a random index and return the index from the indices
    let randomIndex = Math.floor(Math.random() * len);
    return indices[randomIndex]
};
