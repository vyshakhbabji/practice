function findPeakElement(nums){

}

/*
nums = [1,2,3,1]
ind  =  0,1,2,3

dry run

l=0,r=3,m=1 => nums[1] < nums[2] => l=2     r=3
l=2,r=3,m=2 => nums[2] > nums[3] => r=1     r=2
l=2,r=2,m=2 => nums[2] < nums[3] => l=3     r=2
l=3,r=2 => l>r => return l


 */


/*
FOR INTERVIEW SETTIING , SHOULD THE DRY RUN BE DONE BEFORE WRITING THE CODE OR AFTER WRITING THE CODE
    -  I think it should be done before writing the code, so that we can have a clear understanding of the problem and the solution
    -  It will also help in writing the code faster and with less errors
    -  It will also help in writing the code in a more structured way
    -  It will also help in writing the code in a more optimized way

    //WHAT IF I KNOW THE CODE AS I MEMORIZED IT, THEN SHOULD I STILL DO THE DRY RUN
    -  Yes, because it will help in understanding the problem and the solution in a better way
    -  It will also help in understanding the code in a better way

    //WHAT IF I CANT UNDERSTAND THE PROBLEM AT ALL
    -  Then you should ask the interviewer to explain the problem in a better way
    -  You should also ask the interviewer to provide some examples

    THEN DO THE DRY RUN AND THEN WRITE THE CODE ?
    -  Yes, that is the best way to solve the problem

    WHAT IF THE PROBELM IS TWISTED AND I CANT SOLVE IT EVEN AFTER DRY RUN
    -  Then you should ask the interviewer for some hints

    WHAT IF THE INTERVIEWER IS NOT PROVIDING ANY HINTS
    -  Then you should try to solve the problem in a different way

    // HOW TO EASILY IDENTIFY PATTERNS IN THE PROBLEM
    -  By doing the dry run
    -  By solving the problem in a different way

    //LETS SOLVE PEAK PROBLEM CONSIDER I DONO THE CODE

    //WHAT IS THE PROBLEM - FINDING THE PEAK ELEMENT IN THE ARRAY
    //WHAT IS THE INPUT - ARRAY OF INTEGERS
    //WHAT IS THE OUTPUT - INDEX OF THE PEAK ELEMENT
    //WHAT IF THERE ARE MULTIPLE PEAKS - RETURN ANY ONE
    //WHAT IF THERE ARE NO PEAKS - RETURN -1
    //WHAT IF THERE IS ONLY ONE ELEMENT - RETURN 0
    //WHAT IF THERE ARE TWO ELEMENTS - RETURN THE GREATER ELEMENT

    //WHAT IS THE PATTERN - BINARY SEARCH - HOW DO I KNOW - BECAUSE THE ARRAY IS SORTED AND WE NEED TO FIND THE PEAK ELEMENT
    //QUCIK BINARY SEARCH  MID = LOW+HIGH/2  , IF MID < MID+1 THEN LOW = MID+1 ELSE HIGH = MID-1
    //WHAT IS THE TIME COMPLEXITY - O(LOGN)
    //WHAT IS THE SPACE COMPLEXITY - O(1)

    //DRY RUN
    //nums = [1,2,3,1] EXPECTED OUTPUT = 2
    //IDX     0 1 2 3
    // l=0,r=3,m=1 => nums[1] < nums[2] => l=2     r=3
    // l=2,r=3,m=2 => nums[2] > nums[3] => r=1     r=2
    // l=2,r=2,m=2 => nums[2] < nums[3] => l=3     r=2


    //WHAT IF I DO MISTAKES IN DRY RUN ?
    -  Then you should correct the mistakes and do the dry run again
    -  You should also ask the interviewer to provide some hints

    LETS WRITE THE CODE NOW

    function findPeakElement(nums){
        let l =0 , r = nums.length-1

        //base cases
        if(nums.length==0) return -1
        if(nums.length==1) return 0
        if(nums.length==2) return nums[0]>nums[1]?0:1

        //binary search

        while(l<=r){
            let m = Math.floor((l+r)/2)
            if(nums[m]<nums[m+1]){
                l=m+1
            }
            else{
                r=m-1
            }
        }
        return l

    }

 */