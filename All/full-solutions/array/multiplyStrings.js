function multiplyStrings(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    let m = num1.length, n = num2.length;
    let res = Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let mul = (num1[i] - '0') * (num2[j] - '0');
            let sum = mul + res[i + j + 1];
            res[i + j + 1] = sum % 10;
            res[i + j] += Math.floor(sum / 10);
        }
    }

    let result = res.join('');
    while (result[0] === '0') {
        result = result.slice(1);
    }

    return result;
}
