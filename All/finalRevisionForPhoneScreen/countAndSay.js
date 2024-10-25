var countAndSay = function(n) {
    if (n===0) return ""
    if(n==1) return "1"
    let prev = "1"
    for(let i = 2 ; i <=n ; i++){
        let cur = []
        let count = 1 
        for(let j = 0 ; j < prev.length; j ++){
            if(prev[j]===prev[j+1]){
                count++
            }else{
                cur.push(count)
                cur.push(prev[j])
                count = 1
            }
        }
        prev = cur.join("")
    }
    return prev 
};

Time complexity: O(2^n), where n is the input value.
Space complexity: O(2^n), due to the space required for storing the sequence.