function insertIntoCircularLinkedList(arbitraryNode, insertVal) {
    // Case 1: If the list is empty, create a new node that points to itself
    if (!arbitraryNode) {
        let newNode = new Node(insertVal);
        newNode.next = newNode;
        return newNode;
    }

    let current = arbitraryNode;
    while (true) {
        // Case 2: Insert between two nodes where the new value fits
        if (current.val <= insertVal && insertVal <= current.next.val) {
            break;
        }

        // Case 3: Handle the case where we are at the "tail" of the list (max < min)
        if (current.val > current.next.val) {
            // Insert at the end or before the smallest value
            if (insertVal >= current.val || insertVal <= current.next.val) {
                break;
            }
        }

        // Move to the next node
        current = current.next;

        // If we've traversed the entire list and didn't find a spot, insert here
        if (current === arbitraryNode) {
            break;
        }
    }

    // Insert the new node
    let newNode = new Node(insertVal);
    newNode.next = current.next;
    current.next = newNode;

    return arbitraryNode;  // Return the arbitrary pointer
}


//Time complexity: O(n)
//Space complexity: O(1)