var distanceK = function(root, target, k) {
    let adjList={}
    dfs(root, null)

    function dfs(node,parent){
        if(node===null) return
        if(!adjList[node.val]) adjList[node.val]=[]
        if(parent){
            adjList[parent.val].push(node.val)
            adjList[node.val].push(parent.val)
        }
        dfs(node.left,node)
        dfs(node.right,node)
    }

    let visited = new Set()
    let q=[]
    let res=[]

    q.push([target.val, 0])
    visited.add(target.val)

    while(q.length>0){
        let [node,distance] = q.shift()
        if(distance===k){
            res.push(node)
            continue
        }
        for(let nei of adjList[node]){
            if(!visited.has(nei)){
                q.push([nei,distance+1])
                visited.add(nei)
            }
        }
    }
    return res
};

//time complexity : O(N) - N is number of nodes in the tree