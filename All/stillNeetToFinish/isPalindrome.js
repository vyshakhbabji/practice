function isPalindrome(head) {
    if (!head) return true;

    let fast = head, slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    let prev = null;
    while (slow !== null) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    let left = head, right = prev;
    while (right !== null) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }

    return true;
}
// Time Complexity: O(n) where n is the length of the list
