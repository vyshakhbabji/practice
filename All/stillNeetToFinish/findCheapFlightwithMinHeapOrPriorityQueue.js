

function findCheapestPrice(n, flights, src, dst, k) {
    const graph = new Map();

    for (const [from, to, price] of flights) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from).push([to, price]);
    }

    const minHeap = new MinHeap();
    minHeap.push([0, src, 0]); // [cost, current_city, stops]

    const costDict = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));
    costDict[src][0] = 0;

    while (minHeap.size() > 0) {
        const [cost, currentCity, stops] = minHeap.pop();

        if (currentCity === dst) {
            return cost;
        }

        if (stops > k) {
            continue;
        }

        if (graph.has(currentCity)) {
            for (const [nextCity, price] of graph.get(currentCity)) {
                const nextCost = cost + price;

                if (nextCost < costDict[nextCity][stops + 1]) {
                    costDict[nextCity][stops + 1] = nextCost;
                    minHeap.push([nextCost, nextCity, stops + 1]);
                }
            }
        }
    }

    return -1;
}

// Example usage:
const n = 4;
const flights = [
    [0, 1, 100],
    [1, 2, 100],
    [2, 0, 100],
    [1, 3, 600],
    [2, 3, 200]
];
const src = 0;
const dst = 3;
const k = 1;
console.log(findCheapestPrice(n, flights, src, dst, k)); // Output: 700
