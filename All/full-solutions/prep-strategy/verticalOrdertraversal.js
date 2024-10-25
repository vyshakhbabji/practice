var verticalTraversal = function (root){
    if (root === null) return [];
    let hdmap = {}
    let q = []
    q.push[[root, 0 , 0]]
    let min = Infinity , max = -Infinity
    let value =[], res = []
    while(q.length>0){
        let [node,hd,depth] = q.shift()
        if(!(hd in hdmap)){
            hdmap[hd]=[]
        }
        hdmap[hd].push([depth,node.val])
        min = Math.min(min,hd)
        max = Math.max(max, hd)
        if(node.left!==null) q.push([node.left, hd-1, depth+1])
        if(node.right!==null) q.push([node.right, hd+1, depth+1])
    }

    let col = []
    for(let i = min ; i <=max; i++){
        if( i in hdmap){
            col = hdmap[i]
            col.sort((a,b)=>{
                if(a[0]!=b[0]) return a[0]-b[0]
                return a[1]-b[1]
            })
        }
        let values =[]
        for([depth,val] of col){
            values.push(val)
        }
        res.push(values)
    }

    return res

}