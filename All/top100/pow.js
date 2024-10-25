function pow (x, n ){

    if(n===0) return 1
    if(n<0){
        x = 1/x
        n = -n
    }
    let res= 1
    while( n > 0 ){
        if(n%2 !== 0){
            res*=x
        }
        x*=x
        n = Math.floor(n/2)
    }
    return res
}

/*
    x =2  n = 3
    n=3 ,  3>0,  n%2!=0  res = 1*2 =2 , x= 4 n = 1
    n=1 ,  1>0 , n%2!==0 res = 2*4 =8   x=16 n = 0

    res = 8

    x= 2 n= 0  res = 1
    x= 2 m = 3

 */