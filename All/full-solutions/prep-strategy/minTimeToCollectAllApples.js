var minTime = function(n, edges, hasApple) {

    const graph = new Map();
    for (const [u, v] of edges) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    const visited = new Set();
    const dfs = (node) => {
        if (visited.has(node)) return 0;
        visited.add(node);
        let time = 0;
        for (const neighbor of graph.get(node)) {
            time += dfs(neighbor);
        }
        if (time > 0 || hasApple[node]) {
            return time + 2;
        }
        return 0;
    };

    return Math.max(0, dfs(0) - 2);

};