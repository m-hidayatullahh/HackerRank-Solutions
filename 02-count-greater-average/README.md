# Count Elements Greater Than Previous Average

## Difficulty
Easy

## Problem Statement
Given an array of positive integers, return the number of elements that are strictly greater than the average of all previous elements. Skip the first element.

## Example

**Input:**
```
[100, 200, 150, 300]
```

**Output:**
```
2
```

**Explanation:**
- Day 0: 100 (no previous days, skip) 
- Day 1: 200 > average(100) = 100 → count = 1 
- Day 2: 150 vs average(100, 200) = 150 → not greater → count = 1 
- Day 3: 300 > average(100, 200, 150) = 150 → count = 2

## Constraints
- 0 <= responseTimes.length <= 1000
- 1 <= responseTimes[i] <= 10^9

## Solution Approach
1. Initialize sum and count
2. Iterate from index 1
3. Calculate average using running sum
4. Compare and increment count if greater
5. Update running sum

## Time Complexity
O(n) - single pass

## Space Complexity
O(1) - constant space

## Tags
`array` `math` `running-sum`
