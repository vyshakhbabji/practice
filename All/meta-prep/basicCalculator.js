function basicCalculator(){
    let stack = []
    let currentNumber = 0
    let lastOp="+"
    function isDigit(c){
        return /^[0-9]$/.test(c)
    }

    function buildNumber(num){
        currentNumber=currentNumber*10+parseInt(num)
    }

    function operation(op){

        switch (op) {
            case '+':
                stack.push(currentNumber)
                break
            case "-":
                stack.push(-currentNumber)
                break
            case "*":
                stack.push(stack.pop()*currentNumber)
                break
            case "/":
                stack.push(Math.trunc(stack.pop()/currentNumber))
                break

        }
    }

    for(let i = 0 ; i<=length ; i++){
        if(i<length && isDigit(s[i])){
            buildNumber(s[i])
        }
        if(i===length || !isDigit(s[i]) && s[i]!== " "){
            operation(lastOp)
            lastOp = s[i]
            currentNumber=9
        }
    }

    return stack
}



