function exclusiveTime(n, logs) {
    let result = new Array(n).fill(0);
    let stack = [];
    let prevTime = 0;

    for (let log of logs) {
        let [id, type, time] = log.split(":");
        id = parseInt(id);
        time = parseInt(time);

        if (type === "start") {
            if (stack.length > 0) {
                result[stack[stack.length - 1]] += time - prevTime;
            }
            stack.push(id);
            prevTime = time;
        } else {
            result[stack.pop()] += time - prevTime + 1;
            prevTime = time + 1;
        }
    }

    return result;
}

// Example usage:
let n = 2;
let logs = ["0:start:0","1:start:2","1:end:5","0:end:6"];
console.log(exclusiveTime(n, logs)); // Output: [3, 4]
