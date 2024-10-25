class TrieNode{
	constructor (){
		this.children = new Map ()
		this.isEndOfWord = false 
	}
}

class Trie{
	constructor(){
		this.root = new TrieNode()
	}

	//Time complexity O(m)
	// efficient in prefix based operations 
	//can use more space than well balanced BT for storing strings with few common prefix 
	insert(word){
		let node = this.root 
		for(let c of word){
			if(!node.children.has(char)){
				node.children.set(char , new TrieNode())
			}
			node = node.children.get(char)
		}
		node.isEndOfWord = true 
	}


	//// time complexity is O(m)
	//search checks if the exact word is available in the trie 
	//faster then B tree O(mlogn) 
	search(word){
		let node = this.root
		for(let c of word){
			if(!node.children.has(char)){
				return false
			}
			node = node.children.get(char)
		}
		return node.isEndOfWord 
	}

	startsWith(prefix){
		let node = this.root
		for(let c of prefix){
			if(!node.children.has(char)){
				return false 
			}
			node = node.children.get(char)
		}
		return true 
	}


	delete(word){
		if(!word) return false 

		function deleteHelper(node,word, index){
			if(index===word.length){
				if(!node.isEndOfWord) return false
				node.isEndOfWord = false
				return node.children.size = 0 
			}

			const char  = word[index]
			if(!node.children.has(char) )
				return false

			const shouldDeleteCurrentNode  = deleteHelper(node.children.get(char), word, index+1)

			if(shouldDeleteCurrentNode){
				node.children.delete(char)
				return node.children.size ===0 && !node.isEndOfWord
			}
			return false 
		}


		return deleteHelper(this.root, word ,  0 )
	}
}


































