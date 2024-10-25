
var wordBreak = function(s, wordDict) {

    let cache = Array(s.length+1).fill(false)
    cache[s.length]=true

    for(let i = s.length ; i >=0 ; i--){
        for(let w of wordDict){
            if(i+w.length<=s.length && s.slice(i,i+w.length)===w){
                cache[i] = cache[i+w.length]
            }
            if(cache[i]===true)break
        }
    }

    return cache[0]
};


//=========================================================================================================

function wordBreakDFS(s, wordDict) {
   // trie ?

    function Trie() {
        this.children = new Map();
        this.isEnd = false;
    }

    Trie.prototype.insert = function(word) {
        let node = trie;
        for (const char of word) {
            if (!node.children.has(char)) {
                node.children.set(char, new Trie());
            }
            node = node.children.get(char);
        }
        node.isEnd = true;
    }

    const trie = new Trie();
    for (const word of wordDict) {
        trie.insert(word);
    }


    const memo = new Map();

    function dfs(start) {
        if (start === s.length) {
            return true;
        }

        if (memo.has(start)) {
            return memo.get(start);
        }

        let node = trie;
        for (let i = start; i < s.length; i++) {
            node = node.children.get(s[i]);
            if (!node) {
                break;
            }
            if (node.isEnd && dfs(i + 1)) {
                memo.set(start, true);
                return true;
            }
        }

        memo.set(start, false);
        return false;
    }

    return dfs(0);


}

// time complexity: O(n^2) = explaination ?
// why O(n^2) ?
// space complexity: O(n)
