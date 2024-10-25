var depthSum = function(nestedList) {

   let res = []


    function dfs(depth){
       for(let item of nestedList){
           if(item.isInteger()){
               res.push(item.getInteger()*depth)
           }else{
               dfs(item.getList(),depth+1)
           }
       }
    }

    dfs(1)
    return res
};