let input  = [3, 1, 2, 4]


let res = Array(input.length).fill(0)
console.log(res)
res[0] = input[0]
console.log(res)
for(let i = 1 ; i < input.length; i ++){
    res[i] = res[i-1]+input[i]
    console.log(res[i])
}

console.log(res)