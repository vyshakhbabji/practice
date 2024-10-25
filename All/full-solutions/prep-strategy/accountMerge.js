//input:
// [["John","johnsmith@mail.com","john_newyork@mail.com"],
// ["John","johnsmith@mail.com","john00@mail.com"],
// ["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]

var accountsMerge = function(accounts) {

    let emailToName = {} // {emailId : name}
    let adjList = {} // { email : new Set ( email , email  }

    for(let account of accounts){
        let name  = account[0]
        for(let i = 1; i< account.length; i++){
            let node  = account[i]
            emailToName[node] = name
            if(!adjList[node]){
                adjList[node] = new Set()
            }
            if(i>1){
                let prev  = account[i-1]
                adjList[node].add(prev)
                adjList[prev].add(node)
            }
        }
    }

    let visited = new Set()
    let res = []
    for(let node in adjList){
        if(!visited.has(node)){
            let children=[]
            dfs(node , children)
            let name  = emailToName[node]
            children.sort()
            res.push([name, ...children])
        }
    }

    function dfs(node,children){
        visited.add(node)
        children.push(node)
        for(let nei of adjList[node]){
            if(!visited.has(nei)){
                dfs(nei,children)

            }
        }
    }

    return res


}