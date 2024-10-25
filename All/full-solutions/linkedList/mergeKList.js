
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

//array-implementation of a heap

var mergeKLists = function(lists) {
    const queue = new MinPriorityQueue();

    for (let head of lists) {
        while(head) {
            queue.enqueue(head.val);
            head = head.next;
        }
    }

    let result = new ListNode();
    const head = result;

    while(!queue.isEmpty()) {
        const value = queue.dequeue().element;
        result.next = new ListNode(value);
        result = result.next;
    }

    return head.next;
};