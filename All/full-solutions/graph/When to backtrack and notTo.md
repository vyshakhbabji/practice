### When to Backtrack:

You need to backtrack when you're exploring multiple paths or branches and need to return to a previous state to explore other possibilities. This occurs in problems where you're searching through the entire solution space or when constraints require you to return to a previous step.

#### Common scenarios that require backtracking:

1.  **Finding All Paths**:

    -   When you need to explore every possible path from a source to a destination, like in the "all paths from source to target" problem.
    -   You backtrack after exploring each path so that you can explore others.

    Example:

    javascript

    Copy code

    `if (node === target) {
    res.push([...path]);
    }
    // Backtrack after exploring each neighbor`

2.  **Combinatorial Problems**:

    -   Problems like combinations, permutations, subsets, or the N-Queens problem require backtracking to try different configurations.
    -   After testing one combination or permutation, you remove the last element to explore other possibilities.

    Example:

    javascript

    Copy code

    `path.push(node);
    dfs(nextNode, path);
    path.pop();  // Backtrack to try other configurations`

3.  **When Constraints Are Met**:

    -   You often backtrack when you've hit a constraint or a "dead-end" (like reaching a target, fulfilling certain conditions, or encountering invalid moves in puzzles).
    -   You return to a prior state and try a different branch or neighbor.

    Example:

    javascript

    Copy code

    `if (invalidMove || targetReached) {
    path.pop();  // Backtrack as this branch is no longer viable
    return;
    }`

### When Not to Backtrack:

You **don't** need to backtrack if you are simply exploring a path once and don't need to revisit or try alternative paths. In these cases, you only traverse nodes without returning to a previous state.

#### Common scenarios where backtracking isn't needed:

1.  **Single Path Search (like DFS for finding any path)**:

    -   If you're only concerned with finding **one path** from a start node to a goal node, and once you find it, you're done.
    -   There's no need to backtrack because you're not exploring multiple options.

    Example:

    javascript

    Copy code

    `if (node === target) {
    return true;  // Stop the search as soon as you find the path
    }`

2.  **Traversal (Visiting All Nodes)**:

    -   If the goal is to **visit all nodes** once (like in DFS for connected components or a traversal), you don't need to backtrack because you're visiting each node exactly once.

    Example:

    javascript

    Copy code

    `visited[node] = true;
    for (let neighbor of graph.get(node)) {
    if (!visited[neighbor]) {
    dfs(neighbor, visited);
    }
    }`

3.  **Cycle Detection**:

    -   In cycle detection or certain graph traversal algorithms, you only visit a node once and don't need to revisit or backtrack after detecting a cycle.