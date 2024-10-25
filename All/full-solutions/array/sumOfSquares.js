//Given a non-negative integer c, determine if there are two integers a and b such that
//a2 + b2 = c

function judgeSquareSum(c) {
    let a = 0;
    let b = Math.floor(Math.sqrt(c));

    while (a <= b) {
        let sumOfSquares = a * a + b * b;
        if (sumOfSquares === c) {
            return true;
        } else if (sumOfSquares < c) {
            a++;
        } else {
            b--;
        }
    }

    return false;
}
