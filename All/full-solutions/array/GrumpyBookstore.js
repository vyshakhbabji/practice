// when the owner is not grumpy g[i] = 0
// no of customer at i min  = c[i] for eg  5
// g[] = [ 0.1.1, 0]  c = [ 1,4,1,2]


//TODO:  TIME CONPLEXITY  O(n * minutes)
function maxSatisfied(c, g , minutes){

    let satisfied = 0

    //calculate satisfied customer when the owner is not grumpy
    for(let i = 0 ; i < c.length;i++){
        if(g[i]===0){
            satisfied+= c[i]
        }
    }

    //Max aditional satisfied  cusotmers

    let maxAdditional = 0

    for(let i = 0 ; i <= c.length - minutes ; i++) {
        let additional =  0
        //this is for last 3 min only  so starts from  i to i+3
        // which is if starting fro 0 , 0+3 , for pos 1 , 1+3
        for(let j = i ; j< i+minutes ; j++){
            if(g[j]===1){
                additional+= c[j]
            }
        }
        maxAdditional = Math.max(additional, maxAdditional)
    }


    return satisfied+maxAdditional

}

function optimizedMaxSatisfied (c, g , minutes){

    let satisfied  = 0 ; let additional  =  0 , maxSatisfied = 0


    // Calculate base satisfied customers
    for (let i = 0; i < c.length; i++) {
        if (g[i] === 0) {
            satisfied += c[i];
        }
    }


    console.log('sati',satisfied)

    let l =0  ,  r = 0
    //when owner is grumpy use the ruke to get additianl
    while(r<c.length){

        //if cur at g is grumpy add c[i] to additinal
        if(g[r]===1) {
            additional += c[r]
        }

        if(r-l+1> minutes){// if arr len > min then move left by removing additional
            if(g[l]===1) additional-=c[l]
            l++
        }
        maxSatisfied = Math.max(maxSatisfied, additional)

        r++
    }


    console.log(maxSatisfied , additional , satisfied)


    return maxSatisfied + satisfied


}

const customers1 = [1, 0, 1, 2, 1, 1, 7, 5];
const grumpy1 = [0, 1, 0, 1, 0, 1, 0, 1];
const minutes1 = 3;
console.log(optimizedMaxSatisfied(customers1, grumpy1, minutes1)); // Expected output: 16

const customers2 = [1, 2, 3, 4, 5];
const grumpy2 = [1, 1, 1, 1, 1];
const minutes2 = 2;
console.log(optimizedMaxSatisfied(customers2, grumpy2, minutes2)); // Expected output: 9