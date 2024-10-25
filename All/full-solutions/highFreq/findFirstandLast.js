function  findFirst(n ,t)
{
    let l = 0, r = n.length-1 , res =-1
    while(l<=r){
         let m=Math.floor((l+r)/2)
        if(n[m] ===t){
            res= m
            r=m-1
        }

        if(n[m]<t){
            l=m+1
        }else{
            r=m-1
        }
    }

    return res

}


function findLast(n,t)
{
    let l = 0, r = n.length-1, res =-1
    while(l<r){
        let m=Math.floor((l+r)/2)
        if(n[m] ===t){
            res= m
            r=m+1
        }

        if(n[m]<t){
            l=m+1
        }else{
            r=m-1
        }
    }

    return res
}



function searchRange(nums ,target){

    let first = findFirst(nums, target);
    if (first === -1) {
        return [-1, -1];
    }

    let last = findLast(nums, target);

    return [first, last];

}


// Example usage:
let nums = [5, 7, 7, 8, 8, 10];
let target = 8;
console.log(searchRange(nums, target)); // Output: [3, 4]

target = 6;
console.log(searchRange(nums, target)); // Output: [-1, -1]

