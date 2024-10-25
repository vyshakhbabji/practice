function taskScheduler(tasks, n) {

    const tf = Array(26).fill(0)

    // get frequency of all tasks
    for(let t of tasks){
        tf[t.charCodeAt(0) -'A'.charCodeAt(0)] ++;
    }

    //sort
    tf.sort((a,b)=>b-a)

    //max fre of task
    let maxCount = tf[0]

    //max idlecounts
    let maxIdleCounts = (maxCount-1) * n

    //go over task counts and subtract it from maxIdleCount so that idelcount is replaced with tasks
    for(let i=1; i<tf.length; i++){
        if(tf[i]===0) break
        maxIdleCounts -= Math.min(tf[i], maxCount-1) //  for condition like multiple max freq A: 3 B: 3  C: 2
    }

    //makesure maxidlecount is not negative
    maxIdleCounts = Math.max(0, maxIdleCounts)

    return tasks.length+maxIdleCounts


}

// Example input
const input = ["A", "A", "A", "B", "B", "B"];
let n = 3;

// Output the result
console.log(taskScheduler(input, n)); // Output should be 8

