# Find the Smallest Missing Positive Integer

## Difficulty
Hard

## Problem Statement
Given an unsorted array of integers, find the smallest positive integer not present in the array in O(n) time and O(1) extra space.

## Example

**Input:**
```
[3, 4, -1, 1]
```

**Output:**
```
2
```

**Explanation:**
- Step 1: Place each number in correct position (1 at index 0, 2 at index 1, etc.)
- After placement: [1, -1, 3, 4]
- Step 2: Scan to find first position where value != index + 1
- At index 1: value is -1, not 2 → return 2

## Constraints
- 0 <= orderNumbers.length <= 1000
- -10^9 <= orderNumbers[i] <= 10^9
- Duplicates and negatives are allowed

## Solution Approach
1. Use cyclic sort to place numbers in correct positions
2. For number k, place at index k-1
3. Only process positive numbers in range [1, n]
4. Scan to find first mismatch
5. If all correct, return n+1

## Time Complexity
O(n) - each element swapped at most once

## Space Complexity
O(1) - in-place modification

## Tags
`array` `cyclic-sort` `in-place`
