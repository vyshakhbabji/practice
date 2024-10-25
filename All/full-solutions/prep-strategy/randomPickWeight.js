var Solution = function(w) {

    let sum = 0
    this.prefixSum = []

    //why prefix sum?
    //to get the index of the element in the array
    //if we have an array [1,2,3,4] and we want to get a random index
    //we can get the random index by getting the prefix sum of the array
    //and then get the index of the prefix sum array
    //for example, if we have prefix sum array [1,3,6,10]
    //and we have a random number 7
    //we can find the index of 7 in the prefix sum array which is 3
    //and the index of 7 in the original array is 3
    //so we can return 3 as the random index



    for(let i=0;i<w.length;i++){
        sum += w[i]
        this.prefixSum.push(sum)
    }
    this.totalSum = sum

};
Solution.prototype.pickIndex = function() {

    //why do we need to generate a random number?
    //to get the index of the element in the array
    //we generate a random number between 0 and the total sum of the array
    //and then find the index of the random number in the prefix sum array
    //and return the index

    //HOW DO we make sure the probability of picking an element is proportional to its weight?
    //we generate a random number between 0 and the total sum of the array
    //and then find the index of the random number in the prefix sum array
    //and return the index
    //this way we can make sure that the probability of picking an element is proportional to its weight
    //because the prefix sum array is sorted
    //and the index of the random number in the prefix sum array is the index of the element in the original
    //array


    let target = Math.floor(Math.random()*this.totalSum)


    let l = 0
    let r = this.prefixSum.length-1

    while(l<r){
        let m = Math.floor((l+r)/2)


        //why do we need to check if the prefix sum is less than or equal to the target?
        //because the prefix sum array is sorted
        //if the prefix sum is less than or equal to the target
        //we can move the left pointer to the right
        //if the prefix sum is greater than the target
        //we can move the right pointer to the left
        //this way we can find the index of the target in the prefix sum array


        if(this.prefixSum[m]<=target){
            l = m+1
        }else{
            r = m
        }
    }

    return l

};