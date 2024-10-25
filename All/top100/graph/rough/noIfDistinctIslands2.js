var numDistinctIslands2 = function(grid) {
    let R = grid.length;
    let C = grid[0].length;
    let visited = new Set();
    let distinctIslands = new Set();

    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            if (grid[r][c] === 1 && !visited.has(`${r}-${c}`)) {
                let shape = [];
                dfs(r, c, r, c, shape);
                let normalizedShape = getCanonical(shape);
                distinctIslands.add(normalizedShape);
            }
        }
    }

    function dfs(r, c, r0, c0, shape) {
        if (r < 0 || r >= R || c < 0 || c >= C || grid[r][c] === 0 || visited.has(`${r}-${c}`)) {
            return;
        }
        visited.add(`${r}-${c}`);
        shape.push([r - r0, c - c0]);  // Store relative position
        dfs(r + 1, c, r0, c0, shape);  // Down
        dfs(r - 1, c, r0, c0, shape);  // Up
        dfs(r, c + 1, r0, c0, shape);  // Right
        dfs(r, c - 1, r0, c0, shape);  // Left
    }

    function getCanonical(shape) {
        // Create 8 different transformations
        let transformations = [[], [], [], [], [], [], [], []];

        for (let [x, y] of shape) {
            transformations[0].push([x, y]);   // (x, y)
            transformations[1].push([x, -y]);  // (x, -y)
            transformations[2].push([-x, y]);  // (-x, y)
            transformations[3].push([-x, -y]); // (-x, -y)
            transformations[4].push([y, x]);   // (y, x)
            transformations[5].push([y, -x]);  // (y, -x)
            transformations[6].push([-y, x]);  // (-y, x)
            transformations[7].push([-y, -x]); // (-y, -x)
        }

        // Normalize each transformation by sorting and translating to the origin
        for (let t of transformations) {
            t.sort((a, b) => (a[0] - b[0]) || (a[1] - b[1])); // Sort by coordinates
            let [ox, oy] = t[0]; // Get the smallest coordinate
            for (let p of t) {
                p[0] -= ox;  // Translate x to origin
                p[1] -= oy;  // Translate y to origin
            }
        }

        // Convert to string and return the lexicographically smallest form
        return transformations.map(t => JSON.stringify(t)).sort()[0];
    }

    return distinctIslands.size;
};
