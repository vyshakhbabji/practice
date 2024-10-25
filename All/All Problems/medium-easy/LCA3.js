/*



*/

function lca(p,q){
	let pPointer = p 
	let qPointer = q 
	while(pPointer!==qPointer){
		pPointer = pPointer===null?q:pPointer.parent
		qPointer = qPointer===null?p:qPointer.parent
	}
	return pPointer
}