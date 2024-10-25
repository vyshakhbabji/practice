var stringToAtoi = function(str) {
   //without using parseInt

    let i = 0;
    let sign = 1;
    let result = 0;

    while (str[i] === ' ') {
        i++;
    }

    if (str[i] === '+' || str[i] === '-') {
        sign = str[i] === '+' ? 1 : -1;
        i++;
    }

    while (i < str.length && str[i] >= '0' && str[i] <= '9') {
        result = result * 10 + (str[i] - '0');
        i++;
    }

    result = sign * result;

    if (result > 2 ** 31 - 1) {
        return 2 ** 31 - 1;
    }

    if (result < -(2 ** 31)) {
        return -(2 ** 31);
    }

    return result;
}