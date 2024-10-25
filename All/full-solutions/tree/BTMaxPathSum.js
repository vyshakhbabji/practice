//124. Binary Tree Maximum Path Sum

function maxPathSum (root) {
  let maxSum = -Infinity

  function dfs(node){
    //base case
    if(node === null) return 0
    let sum = 0
    //max path that includes one of its subtree
    let leftmax = Math.max(0 , dfs(node.left))
    //max path that includes one of its subtree
    let rightmax= Math.max(0 , dfs(node.right))
    sum = leftmax+rightmax + node.val
    //max path that includes both subtree and node
    maxSum = Math.max(maxSum, sum);
    //max path to include nodes itself
    return Math.max(leftmax+node.val , rightmax+node.val)
  }

  dfs(root)

  return  maxSum
}

/* Approach

Approach:

1. Ask is to calculate max path sum .
2. May  or may not go through root
3. We can use dfs to iterate throguh the tree to cover 3 senarios
	a. max path to include nodes itself
	b. max path that includes one of its subtree (left or right )
	c . max path that includes both subtree
4. Keep a global max and running max  to keep track of max path sum
5. Return the max path sum

is the approach correct ?  Yes

 */