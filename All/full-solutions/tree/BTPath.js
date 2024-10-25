/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {

    if(root===null) return []
    let res = []
    function dfs(node , cur ){
        if(node===null) return

        cur+=(node.val)

        if(node.left === null && node.right===null){
            res.push(cur)
        }else{
            cur+="->"
            dfs(node.left, cur)
            dfs(node.right,cur)
        }

    }


    dfs(root, '')

    return res
};