var taskSchedulerII = function(tasks, space) {
    // Map to store the last time each task was executed
    const lastExecuted = new Map();
    let currentTime = 0;

    // Iterate over each task
    for (const task of tasks) {
        // If the task has been executed before, check the next available time
        if (lastExecuted.has(task)) {
            // Calculate the next available time
            const nextAvailableTime = lastExecuted.get(task) + space + 1;

            // If the current time is less than the next available time, wait until the next available time
            currentTime = Math.max(currentTime, nextAvailableTime);
        }

        // Execute the task at the current time
        lastExecuted.set(task, currentTime);
        currentTime++;
    }

    return currentTime;
};
