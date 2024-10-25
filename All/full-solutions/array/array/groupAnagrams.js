function groupAnagrams(str){

    let map = {}

    for (let s of str){

        let count = new Array(26).fill(0)
        for(let c of s){
            let charCode = c.charCodeAt(0) - 'a'.charCodeAt(0)
            count[charCode] +=1
        }
        let key = count.join('')
        console.log(key)

        if(!map[key]){
            map[key] = []
        }
        map[key].push(s)

    }

    return Object.values(map)



}


//input
const str = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(str)) //Output should be [["bat"],["nat","tan"],["ate","eat","tea"]]

// Time complexity: O(n * m * log(m)) where n is the length of the input array and m is the length of the longest string in the array