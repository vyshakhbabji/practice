
function swapPairs(head) {
    if (!head || !head.next) return head;
    let newHead = head.next;
    head.next = swapPairs(head.next.next);
    newHead.next = head;
    return newHead;
}
// Time Complexity: O(n) where n is the length of the list
