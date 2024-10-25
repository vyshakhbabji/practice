
//treeDiameter - Given an undirected tree, return its diameter: the number of edges in a longest path in that tree.

//The diameter of a tree T is the largest of the following quantities:
//the diameter of T's left subtree
//the diameter of T's right subtree
//the longest path between leaves that goes through the root of T (this can be computed from the heights of the subtrees of T)

//We can use a depth first search to find the diameter of the tree
//We will start at the root node and traverse the tree
//We will keep track of the diameter and the start node
//We will then traverse the tree again starting at the start node to find the diameter of the tree

var treeDiameter = function(edges) {
    if (edges.length === 0) return 0

    //why obj and not arr ? because we need to store the children of each node - representing a tree
    //is this adjList ? yes
    let graph = {}
    let visited = new Set()
    let diameter = 0
    let start = 0

    for (let [u, v] of edges) {
        if (!graph[u]) graph[u] = []
        if (!graph[v]) graph[v] = []
        graph[u].push(v)
        graph[v].push(u)
    }

    function dfs(node, parent, depth) {

        //if the depth is greater than the diameter we update the diameter and the start node
        // why are we doing this ? because we need to find the longest path in the tree
        //how do we find the longest path in the tree ? we start at the root node and traverse the tree
        //we keep track of the diameter and the start node
        //we then traverse the tree again starting at the start node to find the diameter of the tree
        if (depth > diameter) {
            diameter = depth
            start = node
        }
        visited.add(node)

        for (let child of graph[node]) {
            // Avoid going back to the parent node
            if (child === parent || visited.has(child)) continue

            // Recursively call dfs on the child node with an increased depth
            //this is like calculating the height of the tree
            dfs(child, node, depth + 1)
        }
    }

    dfs(0, -1, 0)
    visited.clear()
    dfs(start, -1, 0)
    return diameter

};