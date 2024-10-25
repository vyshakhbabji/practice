function buildGraph(words) {
    const graph = {}
    const depCount ={}

    for (const w  of words){
        for(const c of w) {
            if(!(c in graph)){
                graph[c] = new Set()
                depCount[c]  = 0
            }
        }
    }

    console.log(graph,depCount)

    for(let i =0 ; i< words.length-1; i++){
        const w1 = words[i]
        const w2 = words[i+1]
        const minLen = Math.min(w1.length,w2.length)

        for(let j = 0; j<minLen;j++){
            if(w1[j]!==w2[j]){
                if(!graph[w1[j]].has(w2[j])){
                    graph[w1[j]].add(w2[j])
                    depCount[w2[j]] += 1
                }
                break // only first diff char is needed
            }
        }
    }

    console.log('done',graph,depCount)

    return {graph, depCount}
}
function topologicalSort(graph, depCount) {
    const q  = []
    const res= []

    for (const node in depCount){
        if(depCount[node]===0){
            q.push(node)
        }
    }

    while(q.length>0){
        const len =q.length
        const node =q.shift()
        res.push(node)

        for(const nei of graph[node]){
            depCount[nei] -=1 //decrement depcount
            if(depCount[nei]=== 0){
                q.push(nei)
            }
        }
    }

    return res.length === Object.keys(graph).length ?  res : []
}
function alienOrder(words) {
    const { graph, depCount } = buildGraph(words);

    if (Object.keys(graph).length === 0) {
        return ''; // Invalid order
    }

    const sortedOrder = topologicalSort(graph, depCount);
    return sortedOrder.length === 0 ? '' : sortedOrder.join('');
}

//Input:
 let words = ["wrt", "wrf", "er", "ett", "rftt"]
console.log(alienOrder(words))

