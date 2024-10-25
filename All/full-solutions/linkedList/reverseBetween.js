function reverseBetween(head, m, n) {
    if (!head) return null;

    let dummy = new ListNode(0);
    dummy.next = head;
    let pre = dummy;

    for (let i = 0; i < m - 1; i++) {
        pre = pre.next;
    }

    let start = pre.next;
    let then = start.next;

    for (let i = 0; i < n - m; i++) {
        start.next = then.next;
        then.next = pre.next;
        pre.next = then;
        then = start.next;
    }

    return dummy.next;
}
// Time Complexity: O(n) where n is the length of the list
