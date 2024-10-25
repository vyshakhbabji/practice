var exclusiveTime = function(n, logs) {
    const stack = [];
    const res = new Array(n).fill(0);
    let prevTime = 0;

    for (const log of logs) {
        const [idStr, type, timeStr] = log.split(':');
        const id = Number(idStr);
        const time = Number(timeStr);

        if (type === 'start') {
            if (stack.length > 0) {
                const topId = stack[stack.length - 1];
                res[topId] += time - prevTime;
            }
            stack.push(id);
            prevTime = time;
        } else {
            const endId = stack.pop();
            res[endId] += time - prevTime + 1; // Include the end time
            prevTime = time + 1;
        }
    }

    return res;
};
