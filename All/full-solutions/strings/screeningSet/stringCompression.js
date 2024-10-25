/*
Description:
    Given an array of characters chars, compress it in-place. The length after compression must always be smaller than or equal to the original array.

    Each element of the array should be a single character of type char.

    After you are done modifying the input array in-place, return the new length of the array.

    Follow-up:
Could you solve it using only O(1) extra space?
*/


function compress(chars){

    let write  = 0  ,  read  = 0  ,  cur  = ''

    while(read < chars.length){
        let count  = 0
        cur  = chars[read]

        while(read<chars.length && chars[read] === cur){
            read++
            count++
        }

        chars[write] = cur
        write++

        if(count>1){
            let ctr = count.toString()
            for(let c of ctr){
                chars[write] = c
                write++
            }

        }

    }

    console.log(chars)
    return write


}


// Example usage:
let chars1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
console.log(compress(chars1)); // Output: 6, chars1 becomes ['a', '2', 'b', '2', 'c', '3']

let chars2 = ['a'];
console.log(compress(chars2)); // Output: 1, chars2 becomes ['a']

let chars3 = ['a', 'b', 'b', 'c', 'c', 'c', 'c', 'd'];
console.log(compress(chars3)); // Output: 7, chars3 becomes ['a', 'b', '2', 'c', '4', 'd']