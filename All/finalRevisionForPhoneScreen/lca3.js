function LCA(p,q){

	let pPointer= p
	let qPointer = q

	while(pPointer!=qPointer){
		pPointer = pPointer===null?q:pPointer.parent
		qPointer = qPointer===null?p:qPointer.parent
	}

	return pPointer

}

Time complexity = O(H) 
Space complexity = O(1)



function lowestCommonAncestor(p, q) {
    // Helper function to get the depth of a node
    function getDepth(node) {
        let depth = 0;
        while (node) {
            node = node.parent;
            depth++;
        }
        return depth;
    }

    // Get the depth of both nodes
    let depthP = getDepth(p);
    let depthQ = getDepth(q);

    // Align both nodes to the same level
    while (depthP > depthQ) {
        p = p.parent;
        depthP--;
    }
    while (depthQ > depthP) {
        q = q.parent;
        depthQ--;
    }

    // Move both nodes upwards until we find the LCA
    while (p !== q) {
        p = p.parent;
        q = q.parent;
    }

    return p;
}
