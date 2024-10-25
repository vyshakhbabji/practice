function sqrt(x) {
    if (x < 2) return x;
    let left = 1, right = x, ans = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid <= x) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}

function guessApproachsqrt(x) {
    if (x < 2) return x;
    let guess = x;
    while (guess * guess > x) {
        guess = Math.floor((guess + x / guess) / 2);
    }
    return guess;
}

// O(logx) , O(1)