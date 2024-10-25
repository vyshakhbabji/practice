var findKthPositive = function(arr, k) {

};



/*
     input = [2,3,4,7,11], k = 5
        output = 9

     Dry run
        k=5
        arr = [2,3,4,7,11]
        i=0, k=5, arr[i]=2
        i=1, k=4, arr[i]=3
        i=2, k=3, arr[i]=4
        i=3, k=3, arr[i]=7
        i=4, k=2, arr[i]=11
        return 9


        what is this problem about
            -  finding the kth missing positive number in the array

        what is the input
            -  array of integers and an integer k

        what is the output
            -  integer

        a[idx] = idx+1 or a[idx]-idx-1 = 0

        so a[mid] - mid - 1 < k => l = mid+1 else r = mid-1

       actual array to be between 1 and 1000 => [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
       input = [2,3,4,7,11], k = 5
       missing elements => [1,5,6,8,9,10,12,13,14,15,16,17,18,19,20]
       5th missing element => 9

       formula => missing elements = arr[i] - i - 1 => 0th missing ? arr[0]-0-1 = 2-0-1 = 1
       pattern => missing elements = arr[i] - i - 1

 */