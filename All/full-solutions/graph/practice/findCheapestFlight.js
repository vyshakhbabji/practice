//function findCheapestPrice(n, flights, src, dst, k):
//     create a graph from flights
//     initialize a priority queue with (0, src, 0)  # (cost, current_city, stops)
//     initialize a dictionary to keep track of the minimum cost to reach each city with at most `stops`
//
//     while priority queue is not empty:
//         (cost, current_city, stops) = pop from priority queue
//
//         if current_city == dst:
//             return cost
//
//         if stops > k:
//             continue
//
//         for (next_city, price) in graph[current_city]:
//             next_cost = cost + price
//             if next_city not in cost_dict or next_cost < cost_dict[next_city]:
//                 cost_dict[next_city] = next_cost
//                 push (next_cost, next_city, stops + 1) into priority queue
//
//     return -1

//Input: n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1
// Output: 200
// Explanation: The cheapest price from city 0 to city 2 with at most 1 stop is 200 through the route [0,1,2].

function findCheapestPrice(n, flights, src, dst, k) {
    const graph = new Map();

    for (const [from, to, price] of flights) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from).push([to, price]);
    }

    const queue = [[0, src, 0]]; // [cost, current_city, stops]
    const costDict = Array(n).fill(Infinity);
    costDict[src] = 0;

    while (queue.length > 0) {
        queue.sort((a, b) => a[0] - b[0]); // sort by cost
        const [cost, currentCity, stops] = queue.shift();

        if (currentCity === dst) {
            return cost;
        }

        if (stops > k) {
            continue;
        }

        if (graph.has(currentCity)) {
            for (const [nextCity, price] of graph.get(currentCity)) {
                const nextCost = cost + price;
                if (nextCost < costDict[nextCity]) {
                    costDict[nextCity] = nextCost;
                    queue.push([nextCost, nextCity, stops + 1]);
                }
            }
        }
    }

    return -1;
}

