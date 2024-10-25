function kthMissing(nums, k){
    let l = 0  , r = nums.length-1
    while(l<=r){
        let mid = Math.floor((l+r)/2)
        if(nums[mid]-mid-1 < k){
            l =mid+1
        }
        else{
            r= mid-1
        }
    }
    return l + k
}

/*
  arr = [2,3,4,7,11], k = 5  op = 9
  idx =  0,1,2,3,4

  l =0 r = 4  m = 2  a[2] - 2 - 1 < 5  = > 4-2-1 < 5 T  = l = 2+1
  l =3 r = 4  m = 3  a[3] - 3 - 1 < 5  =>  7-3-1 < 5 T  = l = 3+1
  l =4 r =4   m = 4  a[4] -  4- 1 < 5  =>  11 -4-1 < 5 F  = r = 4-1
  l=4 r= 3  end


  l = 4


 */