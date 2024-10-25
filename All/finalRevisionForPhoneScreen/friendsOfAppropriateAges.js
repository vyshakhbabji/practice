var numFriendRequestsBruteForce = function (ages) {

    let requests = 0
    for (let i = 0; i < ages.length; i++) {
        for (let j = 0; j < ages.length; j++) {
            if (i !== j && canSendRequest(ages[i], ages[j])) {
                requests++;
            }
        }
    }
    return requests
}

var numFriendRequests = function (ages) {

    /*
        Optimization 
        1. Create an array ageCount to store the count of people at each age (0 to 120). Iterate through the input ages array once to populate ageCount.
    */

    let ageCount = Array(121).fill(0)
    for(let age of ages){
        ageCount[age]++
    }

    let requests = 0


    //directly iterate over ages 
    for(let ageA =0 ; ageA < 121 ; ageA++){
        
         // if counts are 0 skip 
        let countA = ageCount[ageA]
        if(countA === 0 ) continue 

        for(let ageB = 0 ; ageB<121 ; ageB++){

            // if counts are 0 skip 
            let countB = ageCount[ageB]
            if(countB === 0 ) continue 

            //if doesnt meet the requirement skip
            if(!canSendRequest(ageA , ageB)) continue 

            //multiply counts 
            requests+= countA * countB

            //if same age , then cant send req , so subtract 
            if(ageA===ageB){
                requests-=countA
            }
        }
    }
    return requests
}


function canSendRequest(ageX, ageY) {
    if(ageY<= 0.5 * ageX + 7) return false 
    if(ageY > ageX) return false 
    if(ageY > 100 && ageX < 100) return false 
    return true 
}




This optimized version has a time complexity of O(1) because we're iterating through a fixed range of ages (0 to 120) regardless of the input size. The space complexity is also O(1) for the same reason.



















