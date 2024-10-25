function groupStrings(strs){
    let map = {}

    for(let s of strings){
        //for each string get key
        let key = getKey(s)
        if(!(key in map)){
            map[key]=[]
        }
        map[key].push(s)
    }

    function getKey(s){ // xyz
        let base = s.charCodeAt(0) // charcode of x
        let key = ""
        for(let c of s){
            let charCodeOfc = (c.charCodeAt(0) - base + 26) %26
            //=> x = 120 - 120 + 26 %26 => 26%26 = 0
            key+= String.fromCharCode(charCodeOfc+97) // 0 + 97 = > a
        }
        return key
    }


    return Object.values(map)


}


console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]));
