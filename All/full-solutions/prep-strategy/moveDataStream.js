/**
 * @param {number} size
 */
var MovingAverage = function(size) {

    this.size = size;
    this.queue = [];
    this.sum = 0;

};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {

    this.queue.push(val);
    this.sum += val;

    if(this.queue.length > this.size){
        this.sum -= this.queue.shift();
    }

    return this.sum/this.queue.length;
};
