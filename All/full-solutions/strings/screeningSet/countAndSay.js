/*
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then
converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of
groups so that each group is a contiguous section of identical digits. Then, for each group,
say the number of digits, followed by the digit itself. To convert the saying into a digit string, concatenate every saying.
 */


var countAndSay = function(n) {
    if (n === 1) return "1";

    let previous = countAndSay(n - 1);
    let result = "";
    let count = 1;

    for (let i = 1; i < previous.length; i++) {
        if (previous[i] === previous[i - 1]) {
            count++;
        } else {
            result += count.toString() + previous[i - 1];
            count = 1;
        }
    }

    // Add the last group
    result += count.toString() + previous[previous.length - 1];

    return result;
};

// Example usage:
console.log(countAndSay(1)); // "1"
console.log(countAndSay(4)); // "1211"


// Example usage:
console.log(countAndSay(1)); // Output: "1"
console.log(countAndSay(2)); // Output: "11"
console.log(countAndSay(3)); // Output: "21"
console.log(countAndSay(4)); // Output: "1211"
console.log(countAndSay(5)); // Output: "111221"



//iterative


function countAndSay(n){
    if(n === 1) return "1"
    let currentTerm = "1"
    for(let i = 2 ; i <= n ; i++){
        let nextTerm = ""
        let count = 1
        for(let j = i ; j < currentTerm.length; j++){
            if(currentTerm[j]  === currentTerm[j-1]) count++
            else{
                nextTerm+= count.toString()+currentTerm[j-1]
                count = 1
            }
        }
        //Add last group
        nextTerm += count.toString()+currentTerm[currentTerm.length-1]
        //move to next term
        currentTerm = nextTerm
    }
    return currentTerm
}
