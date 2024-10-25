class Solution {
    /**
     * @param {number[]} w
     */
    constructor(w) {
        this.cumulativeSum = [];
        let currentSum = 0;
        for (let weight of w) {
            currentSum += weight;
            this.cumulativeSum.push(currentSum);
        }
    }

    /**
     * @return {number}
     */
    pickIndex() {
        const totalWeight = this.cumulativeSum[this.cumulativeSum.length - 1];
        const target = Math.floor(Math.random() * totalWeight) + 1;
        return this.binarySearch(target);
    }

    binarySearch(target) {
        let low = 0, high = this.cumulativeSum.length - 1;
        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            if (this.cumulativeSum[mid] < target) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
