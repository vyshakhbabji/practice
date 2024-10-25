function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

function cloneGraph(node) {


    //Map serves the following purposes:
    // Avoid Multiple Clones: Ensures that each node is cloned exactly once.
    // If a node has already been cloned, the map provides a quick way to retrieve the existing clone.
    // Handle Cycles: Prevents infinite loops in graphs with cycles by keeping track of which nodes have already been visited and cloned.
    // Maintain Node References: Keeps the correct references between the original nodes and their corresponding clones,
    // ensuring that the structure of the graph is preserved in the cloned graph.

    let map = new Map()

    //if empty node return null
    if(!node) return null

    function dfs(node){

        //check if the map has noce and retireve the clone node of the node
        if(map.has(node))
            return map.get(node)

        //create a new clone
        let clone  =  new Node(node.val)
        // add the clone to map along with node so it can be retrived back
        map.set(node,clone)

        //iterate through neighbours of node and add it to the clone ie node.neighbours
        for (let nei of node.neighbors){

            let neighbours = dfs(nei)
            clone.neighbors.push(neighbours)
        }

        return clone
    }

    return dfs(node)



}

// Utility function to build a graph from an adjacency list (for testing purposes)
function buildGraph(adjList) {
    if (adjList.length === 0) return null;

    const nodes = [];
    for (let i = 0; i < adjList.length; i++) {
        nodes.push(new Node(i + 1));
    }

    adjList.forEach((neighbors, i) => {
        nodes[i].neighbors = neighbors.map(index => nodes[index - 1]);
    });

    return nodes[0];
}

// Utility function to compare two graphs (for testing purposes)
function areGraphsEqual(node1, node2) {
    const visited1 = new Set();
    const visited2 = new Set();

    function dfs(node1, node2) {
        if (!node1 || !node2 || node1.val !== node2.val) return false;
        if (visited1.has(node1) || visited2.has(node2)) return true;

        visited1.add(node1);
        visited2.add(node2);

        if (node1.neighbors.length !== node2.neighbors.length) return false;

        for (let i = 0; i < node1.neighbors.length; i++) {
            if (!dfs(node1.neighbors[i], node2.neighbors[i])) return false;
        }

        return true;
    }

    return dfs(node1, node2);
}

// Sample input
const adjList = [
    [2, 4], // Node 1 is connected to Node 2 and Node 4
    [1, 3], // Node 2 is connected to Node 1 and Node 3
    [2, 4], // Node 3 is connected to Node 2 and Node 4
    [1, 3]  // Node 4 is connected to Node 1 and Node 3
];

const rootNode = buildGraph(adjList);
const clonedGraph = cloneGraph(rootNode);
console.log(areGraphsEqual(rootNode, clonedGraph));  // Should print true if the graphs are identical


