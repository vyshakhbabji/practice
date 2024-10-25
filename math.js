class TrieNode{
    constructor(){
        this.children = {}
        this.isEndOfWord = flase
    }
}

class Trie{
    constructor(){
        this.root = TrieNode()
    }

    insert(word){
        let node = this.root
        for(let c of word){
            if(!(c in node.children)) node.children[c]=new TrieNode()
            node = node.children[c]
        }
        node.isEndOfWord=true 
    }

    search(word){
        let node = this.root
        for(let c of word){
            if(! (c in node.children)) return false 
            node = node.children[c]
        }
        return node.isEndOfWord 
    }

    startsWith(word){
        let node = this.root
        for(let c of word){
            if(! (c in node)) return false 
            node = node.children[c]
        }
        return true 
    }
}