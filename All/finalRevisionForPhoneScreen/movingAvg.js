var MovingAverage = function(size) {
    this.queue = []
    this.size = size
    this.sum = 0 
};


MovingAverage.prototype.next = function(val) {
    this.queue.push(val)
    this.sum+=val
    if(this.queue.length>this.size){
        this.sum-=this.queue.shift()
    }
    return this.sum/this.queue.length
};


Optimized Conclusion:
Time complexity: O(1) for each next operation.
Space complexity: O(size), as the queue holds up to size elements.