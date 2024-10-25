function wordLadder(beginWord, endWord, wordList) {

    //add word to the list
    const set  = new Set(wordList)

    //check if target is in the list , if not return 0 // base check
    if(!set.has(endWord)) return 0

    //BFS , hence queue
    let q = []
    //add word and level to queue
    q.push([beginWord,1])

    while(q.length>0){
        let len = q.length
        let [cur,curLevel] = q.shift()

        if(cur===endWord) return curLevel

        console.log('cur', cur)

        // for each word ,  check the len of word as each char needs to be replaced , chekced against the set and
        //see if it exists , if it does , update level
        for(let i = 0 ; i< cur.length;i++){
            for(let c= 'a'.charCodeAt(0);  c<= 'z'.charCodeAt(0) ; c++ ){
                //split the string from 0 to c , replace ith char , attach rest of the string
                //ie ...  (0,i) + * + (i+1,n)
                let newWord  = cur.substring(0,i)+String.fromCharCode(c)+cur.substring(i+1)
                console.log(newWord)

                //check if the new word exisits in set
                //if it exists, push the new word to queue and delete the new word from set to avoid dup chekcs
                if(set.has(newWord)) {
                    q.push([newWord, curLevel + 1])
                    set.delete(newWord)
                }
            }
        }
    }


    return 0;
}


let beginWord = "hit";
let endWord = "cog"
let wordList = ["hot","dot","dog","lot","log","cog"]
console.log(wordLadder(beginWord,endWord, wordList))



//function wordLadder(beginWord, endWord, wordList):
//     create a queue and initialize with (beginWord, 1)
//     create a set of words from wordList
//
//     while queue is not empty:
//         currentWord, level = dequeue from queue
//
//         if currentWord is endWord:
//             return level
//
//         for i from 0 to length of currentWord:
//             for each character from 'a' to 'z':
//                 newWord = currentWord with the ith character replaced by the new character
//
//                 if newWord in wordList:
//                     add (newWord, level + 1) to queue
//                     remove newWord from wordList
//
//     return 0