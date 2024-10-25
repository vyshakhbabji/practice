var letterCombinations = function(digits) {
     
     if(digits.length===0) return [""]

     let map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }


    let res  = []
    function dfs(index, cur){

      if(cur.length === digits.length){
         res.push(cur.join(""))
         return 
      }

      let letters = map[digits[index]]
      for(let i = 0 ; i < letters.length;i++){
         cur.push(letters[i]) // add letter to build the letter combo for the digit 
         dfs(index+1, cur) // increment index to get next digit 
         cur.pop() // backtrack 
      }

    }

    dfs(0,[])
   return res 

};


/*
Approach : 
1. This is a combination of dfs and backtracking problem 
2. Each digit is represented as group of letters 
3. Given the digits , i need to build a combinantion letters from each digit and lenght of the combination is digit length - this is base case 
4. initlialize dfs with index and cur . index controls which digit to choose and a forloop will iterate over each letter of the digit 
4. using dfs and backtracking ,  choose 1 digit at a time and 1 letter per digit and recursively build letter combination for digits length by joining the letters of cur when cur.length ===digit.length push it to res 
4. the time complexity would be O(m)^n where m is letters and n is digits   and space complexity is O(d) = dfs call stack  and O(m)^n space where k is num of combinations stored in res array 

*/