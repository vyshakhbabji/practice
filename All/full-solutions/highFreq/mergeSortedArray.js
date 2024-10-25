var merge = function(nums1, m, nums2, n) {

    let curIndex = nums1.length-1

    let p1 = m-1
    let p2 = n-1

    while(p1>=0 && p2 >=0){

        if(nums1[p1] <= nums2[p2]){

            nums1[curIndex]=nums2[p2]
            p2--
            curIndex--
        }else{
            nums1[curIndex] = nums1[p1]
            p1--
            curIndex--
        }
    }

    while(p2>=0){
        nums1[curIndex] = nums2[p2]
        p2--
        curIndex--
    }

    return nums1


};