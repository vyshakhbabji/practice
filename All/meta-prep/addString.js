function addString(str1,str2){

    let res = ''
    let i = str1.length-1 , j = str2.length-1
    let carry = 0
    while(i>=0 || j>=0 || carry>0){
        let digit1 =  i >=0? parseInt(str1[i]) : 0
        let digit2 = j>=0? parseInt(str1[j]):0
        let sum = carry+ digit1 + digit2
        carry = Math.floor(sum /10 )
        sum = sum%10
        res=sum+res
        i--
        j--
    }

    return res
}

console.log(addString('11', '123'))