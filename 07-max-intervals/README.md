# Maximum Number of Non-Overlapping Intervals

## Difficulty
Medium

## Problem Statement
Given an array of intervals where each interval has a start and end time, return the maximum number of non-overlapping intervals.

## Example

**Input:**
```
meetings = [[1, 2], [2, 3], [3, 4], [1, 3]]
```

**Output:**
```
3
```

**Explanation:**
Sort by end time: [[1,2],[2,3],[1,3],[3,4]]
- Select [1,2] (count=1)
- Select [2,3] (count=2)
- Skip [1,3] (overlaps)
- Select [3,4] (count=3)

## Constraints
- 0 <= meetings.length <= 1000
- meetings[i].length == 2
- 0 <= meetings[i][0] < meetings[i][1] <= 10^9

## Solution Approach
1. Sort intervals by end time (ascending)
2. Select first interval
3. For each subsequent interval:
   - If start >= last_end: select it (non-overlapping)
   - Update last_end
4. Return count of selected intervals

## Time Complexity
O(n log n) - sorting dominates

## Space Complexity
O(1) - in-place sorting

## Tags
`greedy` `interval` `sorting` `activity-selection`
