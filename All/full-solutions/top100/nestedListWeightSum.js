var depthSum = function(nestedList) {

    let res = []
    function dfs(list, depth) {

        for (let nested of list) {
            if (nested.isInteger()) {
                res.push(nested.getInteger() * depth)
            } else {
                dfs(nested.getList(), depth + 1);
            }
        }
    }
    dfs(nestedList, 1);
    return res.reduce((a, b) => a + b)
};


// Example test case
const nestedList = [
    new NestedInteger([new NestedInteger(1), new NestedInteger(1)]),
    new NestedInteger(2),
    new NestedInteger([new NestedInteger(1), new NestedInteger(1)])
];
