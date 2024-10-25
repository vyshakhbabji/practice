function removeNodes(head) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let stack = [];
    let current = head;

    while (current) {
        while (stack.length && stack[stack.length - 1].val < current.val) {
            stack.pop();
        }
        stack.push(current);
        current = current.next;
    }

    let newHead = dummy;
    for (let node of stack) {
        newHead.next = node;
        newHead = newHead.next;
    }
    newHead.next = null;
    return dummy.next;
}
// Time Complexity: O(n) where n is the length of the list
