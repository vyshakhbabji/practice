function trappingRainWater(heights){
    let left = 0
    let right =heights.length-1
    let leftMax = heights[left]
    let rightMax = heights[right]
    let trappingCount = 0
    while(left<right){
        if(heights[left] < heights[right]){
            left++
            leftMax = Math.max(leftMax, heights[left])
            trappingCount += leftMax-heights[left]
        }
        else{
            right--
            rightMax = Math.max(rightMax , heights[right])
            trappingCount +=rightMax-heights[right]
        }
    }
    return trappingCount
}