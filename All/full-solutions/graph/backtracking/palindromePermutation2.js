function palindromePermutation2(str){
    //return alll palindromic permutation
    //input is string
    //no dupicates
    //empty list if no pali formed

    //TTD: 1. construct half string - for that have a map with counts ,  see if counts even , only 1 char odd allowed
    // identify half string ,  one odd char
    //return [] if odd stirng len >1
    //create permute on half string
    // construct full string and push to res

    let map = {}

    for(let i = 0 ;  i < str.length ; i++){
        let c= str[i]
        map[c] = (map[c]||0 ) + 1
    }
   //{a:2, b:2 }  for aabb or aabbc {a:2, b:2 , c:1 } || aabbcd {a:2 b:2 c:1 d:1 }
    let oddCount = 0
    let oddString = ''

    for(let key in map){
        if(map[key] %2 != 0){
            oddCount++
            oddString+= key
        }
        map[key] = Math.floor(map[key]/2)

    }

    // console.log(oddString)
    // console.log(oddCount)
    // console.log(map)

    if(oddCount>1) return []

    let halfString = []
    //construnct half string
    for(let key  in map){
        let len = map[key]
        while(len>0){
            halfString.push(key)
            len--
        }
    }

    let res = []

    let used = Array(halfString.length).fill(false)

    //generic permute dfs
     function dfs(cur){

         if(cur.length === halfString.length){
             const half = cur.join('')
             const full = half+oddString+  half.split('').reverse().join('')
             res.push(full)
             return
         }


         for(let i= 0 ; i < halfString.length; i++){

             if(used[i]) continue
             if(i>0 && halfString[i] === halfString[i-1] && !used[i-1]) continue

             let char = halfString[i]

             cur.push(char)
             used[i]= true

             dfs(cur)

             cur.pop()
             used[i] = false
         }

     }


    dfs([])


    return  res

}

console.log(palindromePermutation2("aaaabbd"))