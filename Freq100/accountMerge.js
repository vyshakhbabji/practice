var accountsMerge = function(accounts) {
    let emailToName = {}  // {"vyshakh.babji@gmail.com": "vyshakh"}
    let adjList = {}  //{"vyshakh.babji@gmail.com" : Set ("emailID") }

    for(let account of accounts){
        let name  =account[0] //first item of the array list
        for(let i = 1 ;i < account.length ; i++){
            let node = account[i] // all emailIds are nodes
            emailToName[node] = name
            if(!adjList[node])   adjList[node] = new Set()
            if(i>1){
                let parent  = account[i-1]
                adjList[node].add(parent)
                adjList[parent].add(node)
            }
        }
    }

    //create o/p strucure based on the adjList
    let visited = new Set()
    let res = []
    for(let node in adjList){
        if(!visited.has(node)){
            let children = []
            dfs(node,children)
            children.sort()
            let name  =  emailToName[node]
            res.push([name , ...children])
        }
    }

    function dfs(node,children){
        visited.add(node)
        children.push(node)
        for(let nei of adjList[node]){
            if(!visited.has(nei))
                dfs(nei,children)
        }
    }

    return res
};

//time complexity: O(N * logN) where N is the total number of emails in all accounts. Sorting the emails within each connected component takes O(N * logN) time, where N is the number of emails in the component.
// space complexity: O(N) where N is the total number of emails in all accounts. The space complexity is dominated by the graph and the visited set, which both use O(N) space.


//
// Explanation of the Graph Structure:
//     Graph Representation (graph):
//
// The graph is an adjacency list represented as an object. Each key is an email, and the value is a Set containing all emails connected to it (i.e., emails that belong to the same account).
// Example Structure:
//     javascript
// Copy code
// graph = {
//     "john@example.com": Set {"john_newyork@example.com", "john@example.com"},
// "john_newyork@example.com": Set {"john@example.com", "john_newyork@example.com"},
// ...
// }
// This structure allows us to efficiently find all emails that should be merged.
//     Email to Name Mapping (emailToName):
//
// This object maps each email to the account name.
//     Example Structure:
//     javascript
// Copy code
// emailToName = {
//     "john@example.com": "John",
//     "john_newyork@example.com": "John",
//     ...
// }
// This ensures that when we output the merged accounts, we can attach the correct name to each group of emails.
//     DFS Traversal:
//
//     We use DFS to explore all connected emails starting from any unvisited email. Each DFS traversal finds all emails in a connected component, which corresponds to one merged account.
//     Result Construction:
//
//     After sorting the emails within each connected component, they are combined with the corresponding account name and added to the final result.