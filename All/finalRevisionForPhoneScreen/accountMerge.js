function accountsMerge(accounts){
	let emailToName = {} // {"vyshakh.babji@gmail.com" : "Vyshakh"}
	let adjList = {}    // {"vyshakh.babji" : Set("vyshakh.babjiv@gmail.com", "vysh.babji@gmail.com")}

	for(let account of accounts){
		//["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"]
		
		let name = account[0]

		for(let i = 1 ; i < account.length ; i++){
			let node = account[i]
			emailToName[node] = name
			if(!(node in adjList)){
				adjList[node]= new Set()
			}
			if(i>1){
				let prev= account[i-1]
				adjList[node].add(prev)
				adjList[prev].add(node)
			}
		}
	}

	let res = []
	let visited= new Set()
	for(let node in adjList){
		if(!visited.has(node)){	
			let children = []
			dfs(node,children)
			children.sort()
			let name = emailToName[node]
			res.push([name, ...children])
		}
	}

	function dfs(node,children){
		visited.add(node)
		children.push(node)
	
		for(let nei of adjList[node]){
			if(!visited.has(nei))
				dfs(nei,children)
		}
	}


	return res 

}


/*

n= total accounts 
m= total emails

each email visited once and adj list is created = O(n+m) for building graph 
each edge is visited twice vis dfs  ===> O(m)
lexographical sort O(ElogE) of Emails

Total time compelxity = > O(n+m) + O(M) + O(MlogM) 


O(M) for adjList + visited set + emailToName map 

DFS Recursion call stack O(M)

*
/





























