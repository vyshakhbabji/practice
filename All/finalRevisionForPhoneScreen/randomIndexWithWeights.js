
/*

 When the numbers are given , no indexes are given and for some reason u know u need to apply bs 
 You dont have low , you dont have high you dono target 

 you just know u need to return some index 

 usually low will be 0 or 1 and high will be max or total sum 

 if u do total sum as high , then there is a high probablity u might do prefix sum 

 with prefix sum , u will probably be able to run bs on and get index 


No specific target, only numbers: When you don't have an explicit "target" but know binary search (BS) is applicable, it often suggests you're looking for an index based on cumulative properties of the numbers—like a prefix sum.

Binary Search with Unknown Bounds: If you don’t know the lower and upper bounds for your search (low and high), you need to determine them:

low is often 0 or 1, representing the start of the array.
high could be the total sum of numbers (or some maximum value in the array), which is commonly used when dealing with cumulative sums or partitioning problems.
Prefix Sum and Binary Search: When prefix sums are involved:

You might be searching for a specific cumulative sum or threshold, or you're looking for a point where a particular cumulative condition is met.
In this case, binary search helps you find the correct index where this condition holds.

*/

var Solution = function(w) {
    this.prefixSum=[]
    let sum = 0 
    for(let weight of w){
        sum+=weight
        this.prefixSum.push(sum)
    }
    this.totalSum = sum 
};


Solution.prototype.pickIndex = function() {
    let low = 0 , high = this.prefixSum.length-1
    let target = Math.ceil(Math.random()*this.totalSum)
    while(low<high){
        let mid = Math.floor((low+high)/2)
        if(this.prefixSum[mid]<target) low=mid+1
        else high =mid
    }
    return low 
};

