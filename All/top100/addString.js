function addStrings(str1, str2){
    let carry = 0
    let i = str1.length-1 , j = str2.length-1
    let res = ''
    while(i>=0 || j >=0 || carry>0){
        let digit1 = i>=0 ? parseInt(str1[i]) : 0
        let digit2 = j>=0 ? parseInt(str2[j]):0
        let sum =  digit1+digit2+carry
        carry = Math.floor(sum/10)
        sum = sum % 10
        res+=sum
        i--
        j--
    }
    return res
}