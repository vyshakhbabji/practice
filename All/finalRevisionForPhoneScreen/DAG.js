//Directed routes between several points, find all possible paths that lead from the starting point to the final destination.

//n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.


/*
Input: graph = [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
*/

function findPathFromSrcToDest(graph){
	/*
		0 - (n-1)
		start from 0 ,  end to n-1
		identify n 
		0 will be start n will be end 
	*/

	let target = graph.length-1
	
	let res = []

	// add ,evaluate,  backtrack 
	function dfs(node, path){

		path.push(node)
		if(node===target) 
			res.push([...path])

		for (let nei of graph[node]){
			dfs(nei)
		}

		path.pop()

	}

	dfs(0,[])//start , path

}