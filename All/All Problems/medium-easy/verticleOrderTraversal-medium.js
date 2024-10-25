/*

You are given a binary tree where each node contains an integer value. Your task is to return a list of the tree's nodes arranged in vertical order from left to right.

Vertical order traversal is defined as follows:

Nodes on the same vertical line are listed in order from top to bottom.
If two nodes are on the same vertical level and height, list them from left to right.

     3
    / \
   9   8
  /   / \
 4   1   7
      \
       5

[[4], [9], [3, 1, 5], [8], [7]]


Approach: 
1. initialize  variable hdmax hdmin q  hdmap 
2. start traversing from the root  , add root to q 
3. run a bfs loop thorught the q and explore both right and left node of the q's node 
4. keep a track of hdmap with the node and the elements going for that hdvalue 
5. when pushing the left and right nodes if they are available , push hd-1 and hd+1 for left and right node . this will determine the distance of the node from the center , which is root node 
	for eg: -1  would be 1 distance left and 1 will be one distance right 
6. when u reach the end ,  traverse the hd map and push each hdmap element between i = hdmin to hdmap one list at a time into result array 


time complexity = O(n) - iterate every node 
space complexity = O(n)  -  visiting each ndoe and storing it in the map  


*/


function verticalTraversal(root){
	let hdmap ={}
	let hdmax,hdmin = -Infinity , Infinity 
	let q = []

	q.push([root, 0 ]) // node and hdValue 

	while(q.length>0){
		let len = q.length
		for(let i = 0 ; i<len ; i++){
			let [node,hd] = q.shift()
		
			if(!(hd in hdmap)) hdmap[hd] = []
			hdmap[hd].push(node)

			hdmax = Math.max(hdmax, hd)
			hdmin = Math.min(hdmin, hd)

			if(node.left) q.push([node, hd-1])
			if(node.right) q.push([node,hd+1])
		}
	}

	let res = []
	for(let i = hdmin; i<=hdmax ; i++){
		res.push([...hdmap[i]]) 
	}
	return res 
}


/*
	
     3
    / \
   9   8
  /   / \
 4   1   7
      \
       5

	DryRun: 

	q =[[3]] hd = 0 
	hdmap : {O:[3]}

	q =[[9],[8]] hdmin = -1 hdmax = 1
	hdmap= {0:[3], -1: [9], 1: [8]}

	q= [[4],[1], [7]] hdmin = -2  hdmax = 2  -2=>4  0 = [1] 2=>[7] 

	hdmap {0:[3,1], -1: [9], 1: [8] -2 :[4] , 2: [7]} 

	q = [[5]]  hdmin = -3  hdmax  =3  -3 , -2 .-1, 0  
	hdmap {0:[3,1], -1: [9], 1: [8, 5] -2 :[4] , 2: [7]}


	expected res = [[4], [9], [3, 1, 5], [8], [7]]
	
	res = [[4] , [9], [3,1] [8,5] [7] ]

*/

























