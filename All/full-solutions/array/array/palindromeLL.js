// Palindrome Linked List

function  ListNode(val) {
    this.val = val;
    this.next = null;
}


function isPalindrome(head) {

}


// Example usage:

let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);

console.log(isPalindrome(head)); // Output: true

let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(2);

console.log(isPalindrome(head2)); // Output: false