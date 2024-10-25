var findRLEArray = function(encoded1, encoded2) {
    let i = 0, j = 0;
    let result = [];


    while(i < encoded1.length && j < encoded2.length) {

        const [val1, freq1] = encoded1[i];
        const [val2, freq2] = encoded2[j];

        const freq = Math.min(freq1,freq2)
        const val = val2 * val1

        if(freq1 < freq2) {
            encoded2[j][1] -= freq1;
            i++;
        } else if(freq1 > freq2) {
            encoded1[i][1] -= freq2;
            j++;
        } else {
            i++;
            j++;
        }

        // if the last element in the result is not the same as the current val, push a new element

        // //results last element
        // let last = result.length - 1
        // if(result.length === 0 || result[last][0] !== val) {
        //     result.push([val, freq]);
        // } else {
        //     result[last][1] += freq;
        // }

        if(result.length === 0 || result[result.length - 1][0] !== val) {
            result.push([val, freq]);
        } else {
            result[result.length - 1][1] += freq;
        }
    }

    return result;
};

const encoded1 = [[2,3], [5,1]];
const encoded2 = [[4,1],[9,2]];

console.log(findRLEArray(encoded1, encoded2));