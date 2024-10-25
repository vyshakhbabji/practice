var lowestCommonAncestor = function(root, p, q) {
  	if(root===null) return null
	if(p<root.val && q < root.val) return lowestCommonAncestor(root.left,p,q)
	if(p>root.val && q>root.val) return lowestCommonAncestor(root.right,p,q)
	return root 
};