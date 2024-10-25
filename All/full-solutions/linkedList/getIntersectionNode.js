function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a;
}
// Time Complexity: O(n + m) where n and m are the lengths of the two lists
