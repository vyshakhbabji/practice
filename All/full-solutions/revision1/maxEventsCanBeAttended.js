var maxEvents = function(events) {
    events.sort((a, b) => a[1] - b[1]);
    let max = Math.max(...events.map(e => e[1]));
    let count = 0;
    let set = new Set();
    for (let i = 1; i <= max; i++) {
        set.add(i);
    }
    for (let i = 0; i < events.length; i++) {
        let start = events[i][0];
        let end = events[i][1];
        while (start <= end) {
            if (set.has(start)) {
                set.delete(start);
                count++;
                break;
            }
            start++;
        }
    }
    return count;
};