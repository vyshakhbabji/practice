var medianSlidingWindow = function(nums, k) {
    let maxHeap = new PriorityQueue({ compare: (a, b) => b - a }); // Max-heap
    let minHeap = new PriorityQueue({ compare: (a, b) => a - b }); // Min-heap

    // Helper function to add an element and balance heaps
    function addElement(num) {
        maxHeap.enqueue(num);
        minHeap.enqueue(maxHeap.dequeue());
        if (minHeap.size() > maxHeap.size()) {
            maxHeap.enqueue(minHeap.dequeue());
        }
    }

    // Helper function to remove an element (lazy removal with hashmap)
    function removeElement(num, balance) {
        if (num <= maxHeap.front()) {
            balance--; // Remove from max-heap
        } else {
            balance++; // Remove from min-heap
        }
        hashmap.set(num, (hashmap.get(num) || 0) + 1); // Track the removal
        return balance;
    }

    // Helper function to rebalance the heaps
    function rebalanceHeaps(balance) {
        if (balance < 0) {
            maxHeap.enqueue(minHeap.dequeue());
            balance++;
        }
        if (balance > 0) {
            minHeap.enqueue(maxHeap.dequeue());
            balance--;
        }
        return balance;
    }

    // Helper function to clean up invalid elements from the heap (lazy removal)
    function lazyRemove(heap) {
        while (hashmap.has(heap.front()) && hashmap.get(heap.front()) > 0) {
            hashmap.set(heap.front(), hashmap.get(heap.front()) - 1);
            heap.dequeue();
        }
    }

    // Helper function to calculate the median
    function getMedian() {
        return k % 2 === 0 ? (maxHeap.front() + minHeap.front()) / 2 : maxHeap.front();
    }

    // Step 1: Add the first k elements to the heaps
    for (let i = 0; i < k; i++) {
        addElement(nums[i]);
    }

    // Step 2: Initialize the result array and lazy removal map
    const medians = [];
    const hashmap = new Map();

    // Step 3: Sliding window process
    for (let i = k; i <= nums.length; i++) {
        // Push the median of the current window
        medians.push(getMedian());

        // Break if we're done processing all windows
        if (i === nums.length) break;

        const outNum = nums[i - k]; // Number going out of the window
        const inNum = nums[i];      // Number coming into the window
        let balance = 0;

        // Remove the outgoing number
        balance = removeElement(outNum, balance);

        // Add the incoming number
        if (inNum <= maxHeap.front()) {
            balance++;
            maxHeap.enqueue(inNum);
        } else {
            balance--;
            minHeap.enqueue(inNum);
        }

        // Rebalance the heaps if needed
        balance = rebalanceHeaps(balance);

        // Perform lazy removals
        lazyRemove(maxHeap);
        lazyRemove(minHeap);
    }

    return medians;
};
