function closestValue(root, target) {

    let closest  = root.val

    while(root){

        if(Math.abs(target-root.val) < Math.abs(closest-target) ||
            Math.abs(target -root.val) === Math.abs(closest-target) && root.val < closest ){
            closest = root.val
        }

        if(target<root.val){
            root = root.left
        }
        else
            root = root.right
    }

    return closest


}

//how to remember this?

//1. We start at the root node and set the closest value to the root node's value
//2. We then traverse the tree in a while loop until we reach a leaf node
//3. At each node, we check if the current node is closer to the target than the current closest value
//4. If it is, we update the closest value to the current node's value
//5. We then move to the left or right child based on the target value
//6. We repeat this process until we reach a leaf node
//7. Finally, we return the closest value found during the traversal

// Time complexity: O(H), where H is the height of the tree. In the worst case, the algorithm will traverse the tree from the root to a leaf node, which takes O(H) time.