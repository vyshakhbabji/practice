class PostOrderTraversal {

    constructor(root) {

    }


    hasNext(){

    }

    next(){

    }
}

function postOrderTraversal (root){
    if(root===null)return []
    let stack1=[]
    let stack2 =[]
    stack1.push(root)
    let res=[]
    while(stack1.length>0){
        let node = stack1.pop()
        stack2.push(node.val)
        if(node.left)stack1.push(node.left)
        if(node.right)stack1.push(node.right)
    }
    while(stack2.length>0){
        res.push(stack2.pop())
    }
    return res
}

function preorder(root){
    if(root===null) return []
    let stack = []
    stack.push(root)
    let res=[]
    while(stack.length>0){
        let node = stack.pop()
        res.push(node.val)
        if(node.right)stack.push(node.right)
        if(node.left)stack.push(node.left)
    }
    return res
}

function inorder(root){
    if(root===null) return []
    let stack = []
    let cur = root
    let res=[]
    while(stack.length>0 || cur!==null){
        if(cur!==null){
            stack.push(cur)
            cur = cur.left
        }else{
            let node = stack.pop()
            res.push(node.val)
            cur=node.right
        }
    }
}