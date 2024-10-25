function kClosestToOrigin(nums,k){

    let maxHeap = new MinHeap((a,b)=>b[1]-a[1]) // sort bby squared distance in decending order

     function squaredDistance (point){
        return point[0]*point[0] + point[1]*point[1]
     }

     for(const point of points){
         const dist  = squaredDistance(point)
         maxHeap.push([point, dist])

         if(maxHeap.size > k ){
             maxHeap.pop()
         }
     }

     const res  = []
     while(!maxHeap.empty){
         res.push(maxHeap.pop()[0])
     }

     return res

}