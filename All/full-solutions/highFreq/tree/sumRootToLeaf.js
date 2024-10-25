class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function sumOfRootToLeaves(root) {

    function sumOfNum(node ,num){

        if(node===null) return  0
        num = num*10+node.val

        //when both left and right is null thats when it is a leaf
        if(node.left===null && node.right === null)
            return num


        let leftNum =sumOfNum(node.left ,num)
        let rightNum=sumOfNum(node.right, num)

        console.log(leftNum)
        console.log(rightNum)

        return  leftNum+rightNum
    }

    return sumOfNum(root, 0)
}

// Example usage:
let treeArray = [1,2,3] ;
let root = createTreeFromArray(treeArray);

console.log("Sum of all leaves:", sumOfRootToLeaves(root)); // Should print 24

// Helper function to create a tree from an array representation
function createTreeFromArray(arr) {
    if (!arr.length) return null;

    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;

    while (i < arr.length) {
        let currentNode = queue.shift();

        if (arr[i] !== null) {
            currentNode.left = new TreeNode(arr[i]);
            queue.push(currentNode.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            currentNode.right = new TreeNode(arr[i]);
            queue.push(currentNode.right);
        }
        i++;
    }

    return root;
}
