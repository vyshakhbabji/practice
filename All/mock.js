/*

The boundary of a binary tree is the concatenation of the root, the left boundary, the leaves ordered from left-to-right, and the reverse order of the right boundary.

The left boundary is the set of nodes defined by the following:

The root node's left child is in the left boundary. If the root does not have a left child, then the left boundary is empty.
If a node in the left boundary and has a left child, then the left child is in the left boundary.
If a node is in the left boundary, has no left child, but has a right child, then the right child is in the left boundary.
The leftmost leaf is not in the left boundary.
The right boundary is similar to the left boundary, except it is the right side of the root's right subtree. Again, the leaf is not part of the right boundary, and the right boundary is empty if the root does not have a right child.

The leaves are nodes that do not have any children. For this problem, the root is not a leaf.

Given the root of a binary tree, return the values of its boundary.
[1,3,4,2]

*/

/*vyshakh --------


1. we have treee with nodes -  cna have left or right  nodes === left might be absent or right might be absent
2. when travesing left toright  ---- preorder 
3. when traversion right to left --- postorder 
4. when leaves dont add then in left or right travesal ( skip it )
5. add all leaves in the leaves arry 



					1 

				2      3 

			  -   -	  5  6     ===> [1,2,5,6,3]


		//left_arr , leaf_arr , right_arr 

*/


function boundryOfBT(root){

	//base case  
	if(root=== null){
		return root
	}

	let leftBoundry = [] 
	let rightBoundry = [] 
	let leaves = [] 

	function isLeaf(){
		if(node.left === null && node.right === null){
			return
		}
	}


	/*
		
					1 

				2      3 

			  -   -	  5  6     ===> [1,2,5,6,3]
	*/


	//traverse the left node of the root ,  collect left most nodes and store it in leftB
	//preorder collecting left 
	function dfsLeftBoundry(node){ 
		if(node ===null || !isLeaf(node)){
			return 
		}
		leftBoundry.push(node.val)
		if(node.left)
			dfsLeftBoundry(node.left)
		else
			dfsRightBoundry(node.right)
	}


	// [1,2 ,  ]

	//post order collection right nodes 
	function dfsRightBoundry(node){
		if(node ===null || !isLeaf(node)){
			return 
		}
		if(node.right)
			dfsRightBoundry(node.right)
		else
			dfsLeftBoundry(node.left)

		rightBoundry.push(node.val)
	}

	//[ 3,  ... ]

	//collectiong leaves 
	function dfsleaves(node){
		if(node===null)
			return 
		if(isLeaf(node)){
			leaves.push(node.val)
		}
		dfsleaves(node.left)
		dfsleaves(node.right)
	}


	//main implemementaiton 
	if(!isLeaf(root)){
		leftBoundry.push(root.val)
	}

	dfsLeftBoundry(root.left)
	dfsleaves(root)
	dfsRightBoundry(root.right)


	return [...leftBoundry , ...leaves , ... rightBoundry]


}


// Time complexity === O(N)
// Space Complexity ==== O(N)





















