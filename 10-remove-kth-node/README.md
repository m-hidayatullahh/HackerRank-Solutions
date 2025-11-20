# One-Pass Removal of k-th Node from End

## Difficulty
Medium

## Problem Statement
Given the head of a singly linked list and an integer k, remove the k-th node from the end in one traversal and return the new head. If k is invalid, return the original list.

## Example

**Input:**
```
head = [5, 6, 7, 8]
k = 3
```

**Output:**
```
[6, 7, 8]
```

**Explanation:**
The k-th node from the end with k=3 is the head (value 5). Removing it yields [6, 7, 8].

## Constraints
- 0 <= number of nodes <= 1000
- -10^9 <= node value <= 10^9
- 0 <= k <= 10^9

## Solution Approach
1. Create dummy node before head
2. Use two pointers (slow and fast)
3. Move fast pointer k steps ahead
4. If fast is null, k is invalid (return original)
5. Move both pointers until fast reaches last node
6. Delete node: slow.next = slow.next.next
7. Return dummy.next

## Time Complexity
O(n) - single pass through list

## Space Complexity
O(1) - constant extra space

## Tags
`linked-list` `two-pointers` `one-pass`
