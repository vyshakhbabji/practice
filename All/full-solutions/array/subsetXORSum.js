//simple dfs solution would work here

function subsetXORSum(nums){

    function dfs(index, curXOR){

        //for all elements is the final sum
        if(index === nums.length){
            return curXOR
        }

        let include = dfs(index+1, curXOR^nums[index])

        let exclude= dfs(index+1,curXOR)

        return  include+exclude
    }

    let subsets=[]
    let result = 0
    function dfsWithSubset (index, curXOR, subset ){

        //for all elements is the final sum
        if(index === nums.length){
            console.log("Subset:", subset, "XOR:", curXOR); // To show subsets
            subsets.push([...subset])
            result+=curXOR
            return
        }

        subset.push(nums[index])

        dfsWithSubset(index+1, curXOR ^ nums[index] , subset)

        subset.pop()

        dfsWithSubset(index+1,curXOR, subset)


    }

    const res1 = dfs(0,0)
    dfsWithSubset(0,0,[])
    console.log(subsets, result)

    return [res1, result]

}

// Example input
const nums = [1, 3];
console.log(subsetXORSum(nums)); // Output should be 6
