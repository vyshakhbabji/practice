function basicCalculator(s){

    let curNumber = 0
    let stack = []
    let lastOp = '+'

    for(let i = 0 ; i<=s.length ; i++){
        if(i<s.length && isDigit(s[i])){
            buildNumber(s[i])
        }

        //out of bounds for last digit - u got to build the number and use last operation here
        if(i===length || (!isDigit(s[i]) && s[i]!== ' ')){
            operations(lastOp)
            lastOp = s[i]
            curNumber=0
        }
    }


    function isDigit(n){
        let num = parseInt(n)
        return num>=0&& num<=9
    }

    function buildNumber(n){
        curNumber=  curNumber*10+parseInt(n)
    }

    function operations(op){
        switch (op) {
            case '+' : stack.push(curNumber)
                break
            case '-': stack.push(-curNumber)
                break
            case '*': stack.push(stack.pop() * curNumber)
                break
            case '/': stack.push(Math.trunc(stack.pop()/curNumber))
                break
            default:
                break

        }
    }

    return stack

}



// isdigit
//buildNumber
//operations

