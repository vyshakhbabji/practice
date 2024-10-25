//Directed routes between several points, find all possible paths that lead from the starting point to the final destination.

//n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.


/*
Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
*/

function findPathFromSrcToDest(graph){

	let target = graph.length-1
	//explore all paths 
	//backtracking 
	let res = []
	function dfs(node, path){
		path.push(node)
		if(node ===target){
			res.push([...path])
		}
		for(let nei of graph[node]){
			dfs(nei,path)
		}
		path.pop()
	}
	dfs(0,[])
	return res 
}