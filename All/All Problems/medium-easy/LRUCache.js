/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) return -1
    const value = this.cache.get(key)
    this.cache.delete(key) //remove key from old order 
    this.cache.set(key,value) // insert key to top to maintain order 
    return value 
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
     if(this.cache.has(key)){
        //if key exists remove old entry
        this.cache.delete(key)
     }

    this.cache.set(key,value) // add new entry to maintain order in the queueu 

    if(this.cache.size> this.capacity) {
        const leastRecentlyUsed = this.cache.keys().next().value
        this.cache.delete(leastRecentlyUsed)
    }



};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */