function canPlaceFlowers(flowerbed, n) {
    let count = 0
    let len = flowerbed.length
    for(let i =0 ; i < flowerbed.length ; i++){

        //check if the current pos of flowerbed is 0
        if(flowerbed[i]===0){

            //check if i = 0 or the left side of the i is 0
            let checkLeft = (i===0 || flowerbed[i-1] === 0)

            //check if i+1 = 0  or if i is the right most pos
            let checkRight = (i===len-1 || flowerbed[i+1]===0)

            //if both left and right is 0 or if the pos is a boundry then u can plant flower
            if(checkRight&& checkLeft){

                flowerbed[i]=1

                //keep a counter and increment
                count++

                //if counter is > n , then return true immediatly
                if(count>=n){
                    return true
                }

                // increment i to i+1 so u cant plant flower next to planted pos
                i++
            }
        }
    }
    return count>=n
}

// Example input
const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n)); // Output should be true

const flowerbed2 = [1,0,0,0,0,0,1];
const n2 = 2;
console.log(canPlaceFlowers(flowerbed2, n2)); // Output should be false
