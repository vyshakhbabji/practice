/*
Problem:
You are given a binary tree where each node contains a value. Your task is to find the lowest common ancestor (LCA) of two given nodes in the tree. The LCA of two nodes p and q in a binary tree is the lowest node that has both p and q as descendants (where a node can be a descendant of itself).

Example:
Consider the binary tree:

markdown
Copy code
        3
       / \
      5   1
     / \ / \
    6  2 0  8
      / \
     7   4
Input:

root: The root node of the binary tree (value 3 in this case).
p: A node in the tree (5).
q: Another node in the tree (1).


Approach: 

1.We have 2 nodes p & q ,  need to find common node connecting these 2 nodes 
2. Starting with the root node , i will traverse left and right and see if i can find p and q 
3. if p and q is found in the same side , i will return the parent of p and q or return parent of what i found 
4. if they are found in different sides i will return the parent node for p and q 
5. this will be done recursively so that each branch is checked recursively and return the result 
6. edge case , if root is nulll i return root  and if p ===root or q===root , i return root 


time complexity : O(n) as we viit each node while traversing 
space complexity  :  O(H) height of the tree due to recursion stack 

*/


function LCA(root,p ,q ){

	if(root===null||p===root||q===root) return root 
	let left = LCA(root.left, p ,q)
	let right = LCA(root.right, p , q)
	if(left&& right ) return root 
	return (left||right)

}


/*
dry run 


Ex1: 
 root = 3   p = 5 q =1
 
 lets check if p and q exisits indiviualy in root.left and root.right 

     	3
       / \
      5   1
     / \ / \
    6  2 0  8
      / \
     7   4


 Left = 3->5-> 5 found  return to root (3)

 Right = 3->1  1 found return to root (3)

 3 is the LCA of 5,1 


Ex2: 
 root =3  p = 6 q = 7  


 left  = 3->5->6->  6 found  return (3->5->6)
	
 right = 3->1->0->8 p not found q not found ,   return to root 

 left = 3,5,6 (notfound)- 3,5,2,7  q found return to root ( 3->5->2->7)

 as 7 and 6 are on same branch , and root of both is 5 , LCA is 5 

*/


function lcaOfBST(root, p,q){
	if(root===null) return root 
	if(p.val<root.val && root.val<q.val) return lcaOfBST(root.left,p,q)
	if(p.val>root.val && root.val>q.val) return lcaOfBST(root.right,p,q)
	return root 
}

Time Complexity : O(h)


function iterativeLCAwithPointer(root,p,q){

	let queue  = []
	queue.push(root)
	let parentmap= new Map()
	
	while(queue,length>0){
		const node = queue.shift()
		if(node.left){
			parentmap.set(node.left,node)
			queue.push(node.left)
		}
		if(node.right){
			parentmap.set(node.right,node)
			queue.push(node.right)
		}
	}

	cont ancestors = new Set()
	while(p!=null){
		ancestors.add(p)
		p = parentmap.get(p)
	}

	while(!ancestors.has(q)) q = parentmap.get (q)


	return q 
}


//time complexity O(n) space O(n) 

// lca with parent pointer 
function lca(p,q){
	let ppointer = p 
	let qpointer =q 
	while(ppointer!=qpointer){
		ppointer= ppointer===null?q:ppointer
		qpointer=qpointer===null?p:qpointer
	}
	return ppointer
}





































