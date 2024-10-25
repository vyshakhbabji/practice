function subtractProductAndSum(n) {
    let product = 1;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        product *= digit;
        sum += digit;
        n = Math.floor(n / 10);
    }

    return product - sum;
}

O(logn)

