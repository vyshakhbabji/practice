var groupAnagrams = function(strs) {
    let map = {}

    for(let s of strs){
        const arr = Array(26).fill(0)
        for(let c of s){
            arr[c.charCodeAt(0)-97]+=1
        }
        const key = arr.join('#')
        if(!(key in map)){
            map[key] = []
        }
        map[key].push(s)
    }
    return Object.values(map)

};