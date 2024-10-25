function copyRandomList(head) {
    if (!head) return null;

    let map = new Map();

    let node = head;
    while (node) {
        map.set(node, new ListNode(node.val));
        node = node.next;
    }

    node = head;
    while (node) {
        map.get(node).next = map.get(node.next) || null;
        map.get(node).random = map.get(node.random) || null;
        node = node.next;
    }

    return map.get(head);
}
// Time Complexity: O(n) where n is the length of the list
