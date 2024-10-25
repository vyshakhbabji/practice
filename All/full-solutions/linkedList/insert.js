function insert(head, insertVal) {
    if (!head) {
        let newNode = new ListNode(insertVal);
        newNode.next = newNode;
        return newNode;
    }

    let curr = head;
    while (true) {
        if (curr.val <= insertVal && insertVal <= curr.next.val) {
            break;
        }

        if (curr.val > curr.next.val && (insertVal >= curr.val || insertVal <= curr.next.val)) {
            break;
        }

        curr = curr.next;
        if (curr === head) break;
    }

    let newNode = new ListNode(insertVal, curr.next);
    curr.next = newNode;

    return head;
}
// Time Complexity: O(n) where n is the length of the list
