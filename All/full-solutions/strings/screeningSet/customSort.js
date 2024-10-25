/*
Description:
You are given two strings order and str. order represents the order of characters in a custom alphabet.
str is the string you need to sort according to the custom order defined by order.

Input:

A string order which is a permutation of the English alphabet.
A string str which you need to sort.
Output:

The sorted string according to the custom order defined by order.
Constraints:
order has length 26.
order contains unique characters.
str is a string of length at most 200.
 */

// order is the order in which the string to be sorted
//  str is the string to be sorted

// order  = " cba"  c first b second and a 3rd
//str = "abcd"  === > cba and remaining chars as is or append other chars in place ?
// what if str is adbc is it going to be cdba  or cbad

// check the freq and map it for str
// based on the counts and sort order ,  create string ..
//add remainign strings append on the map  in any order


function customSortString(order,  str){
    let freq = {}

    for(let s of str ){
        freq[s] = (freq[s]||0) + 1
    }

    let sortedStr = ''
    for(let o of order){

        while(freq[o]>0){
            sortedStr+=o
            freq[o]--
        }
    }

    for(let k of Object.keys(freq)){
        while(freq[k]>0){
            sortedStr+=k
            freq[k]--
        }
    }

    return sortedStr
}

// Example usage:
console.log(customSortString("cba", "adbyxcx")); // Output: "cbadxx"
console.log(customSortString("cba", "adbc")); // Output: "cbad"
console.log(customSortString("cba", "abcd")); // Output: "cbad"
console.log(customSortString("cba", "adbcccd")); // Output: "cccbaad"
console.log(customSortString("kqep", "pekeq")); // Output: "kqeep"




//using array

function customSort(order ,s){

    //transform order into soemthing so look up is easy
    // lookup table?


    //for string should i have count map ? nad then read the order , and if
    //string is there ,  then append to res
    //if all strings are consumed in order , append rest of the string  ?

    let arr = Array(26).fill(0)

    // aabbccd
    for(let c of s){
        arr[c.charCodeAt(0)-97]+=1
    }

    // [2,2,2,1,0,0...]


    let res= ''
    for(let c in order){
        const code = c.charCodeAt(0)-97
        //if code > 0  in arr , decrement the code while appending the char to res
        while(arr[code]>0){
            res+=c
            arr[code]--
        }
    }


    //add remoaining chars from arr  if count >0
    for(let i = 0 ; i<arr.length && arr[i]>0 ; i++){
        while(arr[i]>0){
            res+=String.fromCharCode(i+97)
            arr[i]--
        }
    }


    return res
}