function accountMerge(accounts){
    let emailToName = {}
    let adjList = {}

    for(let account of accounts){
        let name  = account[0]
        for(let i = 1 ; i < account.length; i++ ){
            let node  =account[i]
            emailToName[node] = name
            if(!adjList[node]){
                adjList[node] = new Set()
            }
            if(i>1){
                let prev = account[i-1]
                adjList[node].add(prev)
                adjList[prev].add(node)
            }
        }
    }
    let res =[]
    let visited=new Set()
    for(let node in adjList){
        if(!visited.has(node)){
            let name = emailToName[node]
            let children  = []
            dfs(node, children)
            children.sort()
            res.push([name , ...children])
        }
    }

    function dfs(node, children){
        visited.add(node)
        children.push(node)
        for(let nei of adjList[node]){
            if(!visited.has(nei)){
                dfs(nei, children)
            }
        }
    }
    return res

}