var boundaryOfBinaryTree = function(root) {

    if(root === null) return []

    let leaves = []
    let leftBoundry = []
    let rightBoundry = []

    function isLeaf(node){
        return node.left === null && node.right === null
    }

    function dfsleaves(node){
        if(node===null)return
        if(isLeaf(node)){
            leaves.push(node.val)
            return
        }
        dfsleaves(node.left)
        dfsleaves(node.right)
    }

    function dfsLeftBoundry(node){
        if(node===null || isLeaf(node)) return
        leftBoundry.push(node.val)
        if(node.left) dfsLeftBoundry(node.left)
        else dfsLeftBoundry(node.right)
    }

    function dfsRightBoundry(node){
        if(node===null||isLeaf(node))return
        if(node.right) dfsRightBoundry(node.right)
        else dfsRightBoundry(node.left)
        rightBoundry.push(node.val)
    }

    if(!isLeaf(root)){
        leftBoundry.push(root.val)
    }
    dfsLeftBoundry(root.left)
    dfsleaves(root)
    dfsRightBoundry(root.right)


    return [...leftBoundry,...leaves,...rightBoundry]

};

//time complexity is O(n) as we are visiting all nodes