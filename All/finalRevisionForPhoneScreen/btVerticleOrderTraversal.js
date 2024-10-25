
var verticalOrder = function(root) {

    if(root===null)return []
    let q = []
    let hdmax = -Infinity , hdmin=Infinity
    q.push([root,0])
    let hdmap = {}

    while(q.length>0){
        let len = q.length
        for(let i = 0 ; i < len ; i ++){
            let [node,hd] = q.shift()
            if(!(hd in hdmap)){
                hdmap[hd]=[]
            }
            hdmap[hd].push(node.val)
            hdmax=Math.max(hd,hdmax)
            hdmin = Math.min(hd,hdmin)
            if(node.left){
                q.push([node.left,hd-1])
            }
            if(node.right){
                q.push([node.right,hd+1])
            }
        }
    }

    console.log(hdmap)

    let res=[]
    for(let i=hdmin; i<=hdmax ; i++){
        res.push([...hdmap[i]])
    }
    return res 
};


Total Time Complexity:
The time complexity of the entire function is dominated by the tree traversal and the result construction, so the overall time complexity is O(n), where n is the number of nodes in the tree.

Space Complexity:
Queue (q):

The queue is used for BFS traversal. In the worst case, the queue could store all the nodes on the current level of the tree, which could be up to n nodes in the case of a very unbalanced tree. Thus, the space complexity for the queue is O(n).
Horizontal Distance Map (hdmap):

The hdmap stores the values of nodes at different horizontal distances. Since each node is stored once, the space complexity for hdmap is O(n).
Result Array (res):

The result array stores the final vertical order traversal. It holds all n nodes in the tree, so the space complexity for the result array is also O(n).
Auxiliary Space:

Aside from the space used by the queue, map, and result array, a few additional variables are used (hdmin, hdmax, etc.), which require O(1) space.