var pathSum = function(root, targetSum) {


    let res = []

    function dfs(node, cur){

        if(node===null)
            return

        cur.push(node.val)

        if(node.left === null && node.right === null && cur.reduce((a,b)=>a+b) === targetSum){
            res.push([...cur])
        }

        dfs(node.left , cur)
        dfs(node.right , cur)
        cur.pop()

    }

    dfs(root, [])
    return res




};