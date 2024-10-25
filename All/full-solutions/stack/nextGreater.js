function nextGreaterElement(nums1, nums2) {

    let stack = []
    let nextGreater = {}

    for(let i=0; i < nums2.length ; i++){
        let n2 = nums2[i]

        while(stack.length && stack[stack.length-1]<= n2) stack.pop() //get the top element to be next number greater then current

        nextGreater[n2] = stack.length?stack[stack.length-1]:-1

        stack.push(n2)
    }

    return nums1.map(num=> nextGreater[num]);

}


// Test cases
let nums1 = [4, 1, 2], nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2)); // Output: [-1, 3, -1]

let nums1_2 = [2, 4], nums2_2 = [1, 2, 3, 4];
console.log(nextGreaterElement(nums1_2, nums2_2)); // Output: [3, -1]