//Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]
//
// Output: [["hit","hot","dot","dog","cog"], ["hit","hot","lot","log","cog"]]



function findLadders(beginWord, endWord, wordList){

    let q = []

    let wordset = new Set(wordList)
    // to keep a track of distance from prev to next word change
    let dist =  new Map()

    // to keep track of neighbours of the change in letters
    let nei =  new Map()

    //found flag to keep a track of found word
    let found = false

    q.push([beginWord,1])
    dist.set(beginWord,1)

    while(q.length>0 && !found){
        let curlen = q.length
        for(let i = 0; i < curlen ; i++){
            const [curWord,curLevel] = q.shift()

            for (let j = 0; j < curWord.length; j++) {
                for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
                    let newWord = curWord.substring(0, j) + String.fromCharCode(c) + curWord.substring(j + 1);

                    if (wordset.has(newWord)){
                        //check if new word in dist, if not update dist with +1
                        if (!dist.has(newWord)) {
                            dist.set(newWord, curLevel + 1)
                            q.push([newWord, curLevel + 1])
                        }

                        //check if in nei , if not update it with newword, curWord pair
                        if (!nei.has(newWord)) {
                            nei.set(newWord, [])
                        }
                        nei.get(newWord).push(curWord)
                    }

                    if(newWord === endWord){
                        found = true
                    }
                }
            }
        }
    }
    let res = []

    console.log(nei)
    console.log(dist)

    if(found){
        const path = [endWord]
        backtrack(endWord,path)
    }

    function backtrack(curWord,path){

        //check base case  curword == beginword
        //basecase 1
        if(curWord === beginWord){
            res.push([...path].reverse())
            return
        }
        //if the cur word not in nei , then return
        //base case 2
        if(!nei.has(curWord)){
            return;
        }

        // get neighbour of curword and iterate over it
        //check in dist if the prev word and curword is one step away
        for(const prevword of nei.get(curWord)){
            if(dist.get(prevword)+1 === dist.get(curWord)){
                path.push(prevword)
                backtrack(prevword,path)
                path.pop()
            }
        }


    }

    return res
}


// Test the function
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
console.log(findLadders(beginWord, endWord, wordList));
