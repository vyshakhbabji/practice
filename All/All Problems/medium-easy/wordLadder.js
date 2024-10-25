/*
A transformation sequence from word beginWord to word endWord using a dictionary wordList is a sequence of words beginWord -> s1 -> s2 -> ... -> sk such that:

Every adjacent pair of words differs by a single letter.
Every si for 1 <= i <= k is in wordList. Note that beginWord does not need to be in wordList.
sk == endWord
Given two words, beginWord and endWord, and a dictionary wordList, return the number of words in the shortest transformation sequence from beginWord to endWord, or 0 if no such sequence exists.

 

Example 1:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> cog", which is 5 words long.
Example 2:

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
*/



var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);  // Convert wordList to a Set for quick lookup
    if (!wordSet.has(endWord)) return 0;  // If endWord is not in wordList, return 0
    
    let queue = [[beginWord, 1]];  // BFS queue, starting with beginWord and level 1
    let visited = new Set();       // To track visited words and avoid cycles
    visited.add(beginWord);        // Add beginWord to visited

    // Preprocess the wordList to create intermediate patterns
    const getNeighbors = (word) => {
        let neighbors = [];
        for (let i = 0; i < word.length; i++) {
            let pattern = word.slice(0, i) + "*" + word.slice(i + 1);
            for (let j = 0; j < 26; j++) {
                let char = String.fromCharCode(97 + j); // 'a' to 'z'
                let newWord = word.slice(0, i) + char + word.slice(i + 1);
                if (wordSet.has(newWord) && newWord !== word) {
                    neighbors.push(newWord);
                }
            }
        }
        return neighbors;
    };

    // BFS loop
    while (queue.length > 0) {
        let [currentWord, level] = queue.shift();  // Dequeue the next word
        
        // Check all possible transformations of currentWord
        let neighbors = getNeighbors(currentWord);
        for (let neighbor of neighbors) {
            if (neighbor === endWord) return level + 1;  // Found the endWord, return the answer
            if (!visited.has(neighbor)) {
                visited.add(neighbor);  // Mark neighbor as visited
                queue.push([neighbor, level + 1]);  // Push neighbor into queue with incremented level
            }
        }
    }
    
    return 0;  // If no transformation sequence is found, return 0
};
