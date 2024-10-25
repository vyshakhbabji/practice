var countAndSay = function(n) {
    if(n===1){
        return "1"
    }
    let prev="1"
    for(let i=2; i<=n;i++){
        let cur =""
        let count =1
        for(let j = 0 ; j<prev.length;j++){
            if(prev[j]===prev[j+1]){
                count++
            }else{
                cur+=count+prev[j]
                count = 1
            }
        }
        prev=cur
    }
    return prev
};