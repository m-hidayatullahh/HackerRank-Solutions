# Min-Tracking Stack Implementation

## Difficulty
Medium

## Problem Statement
Implement a stack that supports push, pop, top, and getMin operations in O(1) time, where getMin returns the minimum element.

## Example

**Input:**
```
operations = ['push 2', 'push 0', 'push 3', 'push 0', 'getMin', 'pop', 'getMin', 'pop', 'top', 'getMin']
```

**Output:**
```
[0, 0, 0, 0]
```

**Explanation:**
- push 2, push 0, push 3, push 0
- getMin → 0
- pop (remove 0), getMin → 0
- pop (remove 3), top → 0, getMin → 0

## Constraints
- 0 <= x <= 100 for push operations
- pop, top, and getMin only called when stack is non-empty
- Total operations <= n

## Solution Approach
1. Use two stacks:
   - mainStack: stores all values
   - minStack: tracks minimum at each state
2. push(x): push x to mainStack, push min(x, current_min) to minStack
3. pop(): pop from both stacks
4. top(): return top of mainStack
5. getMin(): return top of minStack

## Time Complexity
O(1) - all operations are constant time

## Space Complexity
O(n) - two stacks

## Tags
`stack` `design` `data-structure` `min-tracking`
