function rangeSumBST(root, low, high){
	if(root === null) return 0 
    let sum = 0 
	if(low<=root.val && root.val<=high) sum+=root.val
	if(low<root.val) sum+=rangeSumBST(root.left,low, high)
	if(root.val<high) sum+=rangeSumBST(root.right,low,high)
    return sum
}


TimeComplexity: O(n) === unbalanced  or O(logn) === balanced tree 
SpaceComplexity: O(h) 


//if node === null return 0 
//intialize sum variable
//if root.val between low and high inclusive , add to sum 
// if root.val > low -  recuricely add sum by exploring node.left
// if root.val <hgih. - recursively add sum by exploring node.right 



function rangeSumBSTIterative(root, low, high) {
    let sum = 0;
    let stack = [root];  // Simulate a recursion stack

    while (stack.length > 0) {
        let node = stack.pop();

        if (node !== null) {
            if (low <= node.val && node.val <= high) {
                sum += node.val;
            }
            if (low < node.val) {
                stack.push(node.left);  // Explore the left subtree if there's a chance of values in range
            }
            if (node.val < high) {
                stack.push(node.right);  // Explore the right subtree if there's a chance of values in range
            }
        }
    }

    return sum;
}


TimeComplexity: O(n) === unbalanced  or O(logn) === balanced tree 
SpaceComplexity: O(h) |





Recursive Approach: The space complexity is O(h), where h is the height of the tree, due to the recursive call stack. In the worst case, for a skewed tree, this can become O(n), but for a balanced tree, it will be O(log n).
Iterative Approach: The iterative approach also has O(h) space complexity due to the stack (or queue) that simulates the recursion. Again, in the worst case, this can be O(n) for an unbalanced tree, but for a balanced tree, it will be O(log n).

