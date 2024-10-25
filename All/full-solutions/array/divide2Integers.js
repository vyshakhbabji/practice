function divide(dividend, divisor) {
    if (divisor === 0) return NaN;
    if (dividend === 0) return 0;
    if (dividend === -(2**31) && divisor === -1) return 2**31 - 1;

    const sign = (dividend < 0) === (divisor < 0) ? 1 : -1;
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    let quotient = 0;

    while (absDividend >= absDivisor) {
        absDividend -= absDivisor;
        quotient += 1;
    }

    return sign * quotient;
}


function divide(dividend, divisor) {
    if (divisor === 0) return NaN;
    if (dividend === 0) return 0;
    if (dividend === -(2**31) && divisor === -1) return 2**31 - 1;

    const sign = (dividend < 0) === (divisor < 0) ? 1 : -1;
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    let quotient = 0;

    while (absDividend >= absDivisor) {
        let tempDivisor = absDivisor, multiple = 1;
        while (absDividend >= (tempDivisor << 1)) {
            tempDivisor <<= 1;
            multiple <<= 1;
        }
        absDividend -= tempDivisor;
        quotient += multiple;
    }

    return sign * quotient;
}


