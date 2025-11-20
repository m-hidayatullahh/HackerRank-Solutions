class SinglyLinkedListNode {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

function removeKthNodeFromEnd(head, k) {
    if (k < 0 || head === null) {
        return head;
    }
    
    const dummy = new SinglyLinkedListNode(0);
    dummy.next = head;
    
    let slow = dummy;
    let fast = head;
    
    for (let i = 0; i < k; i++) {
        if (fast === null) {
            return head;
        }
        fast = fast.next;
    }
    
    if (fast === null) {
        return head;
    }
    
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    
    return dummy.next;
}

// Helper function to build list from array
function buildList(arr) {
    if (arr.length === 0) return null;
    
    const head = new SinglyLinkedListNode(arr[0]);
    let current = head;
    
    for (let i = 1; i < arr.length; i++) {
        current.next = new SinglyLinkedListNode(arr[i]);
        current = current.next;
    }
    
    return head;
}

// Helper function to print list
function printList(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.data);
        current = current.next;
    }
    return result;
}

// Test cases
console.log(printList(removeKthNodeFromEnd(buildList([5, 6, 7, 8]), 3))); // [6, 7, 8]
console.log(printList(removeKthNodeFromEnd(buildList([5]), 1)));           // [5]
console.log(printList(removeKthNodeFromEnd(buildList([1, 2]), 0)));        // [1]
console.log(printList(removeKthNodeFromEnd(buildList([1, 2, 3]), 1)));     // [1, 3]

module.exports = { removeKthNodeFromEnd, buildList, printList, SinglyLinkedListNode };
