var findRLEArray = function(encoded1, encoded2) {
    let i = 0, j = 0;
    let result = [];

    while (i < encoded1.length && j < encoded2.length) {
        let [val1, freq1] = encoded1[i];
        let [val2, freq2] = encoded2[j];
        let product = val1 * val2;
        let minFreq = Math.min(freq1, freq2);

        // If the last segment in the result has the same value, combine them
        if (result.length > 0 && result[result.length - 1][0] === product) {
            result[result.length - 1][1] += minFreq;
        } else {
            result.push([product, minFreq]);
        }

        // Decrease the frequencies and move the pointer(s)
        encoded1[i][1] -= minFreq;
        encoded2[j][1] -= minFreq;

        if (encoded1[i][1] === 0) i++;
        if (encoded2[j][1] === 0) j++;
    }

    return result;
};
