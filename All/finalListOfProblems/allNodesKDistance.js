var distanceK = function(root, target, k) {
    //find all nodes k distance from target
    //given is target(node) and k==>distance
    // res should contain all vals of node k distance from target

    // we need toe explore all the nodes - so time compelxity is O(N)
    // consider this as a graph problem instead of tree problem as a tree is a graph

    //run dfs to create adjList
    //then for each node starting from target find nodes k distance using bfs
    //bfs because - early termination , goes layer by layer  and checks if there is node k ditance


    let res = []
    let adjList = {}

    function dfs(node,parent){
        if(node === null) return
        if(!adjList[node.val]){
            adjList[node.val] = []
        }
        if(parent){
            adjList[parent.val].push(node.val)
            adjList[node.val].push(parent.val)
        }
        dfs(node.left,node)
        dfs(node.right,node)
    }
    dfs(root,null)

    let q =[]
    q.push([target.val , 0 ]) // starting node will be target with distance 0
    let visited = new Set()
    visited.add(target.val)

    while(q.length>0){
        let [node,distance] = q.shift()
        if(distance === k ){
            res.push(node)
            continue
        }
        for(let nei of adjList[node]){
            if(!visited.has(nei)){
                visited.add(nei)
                q.push([nei, distance+1])
            }
        }
    }
    return res
};
