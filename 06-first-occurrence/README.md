# Find First Occurrence

## Difficulty
Medium

## Problem Statement
Given a sorted array of integers that may contain duplicates, return the index of the first occurrence of a target value or -1 if not found.

## Example

**Input:**
```
nums = [1, 2, 3, 4, 5]
target = 3
```

**Output:**
```
2
```

**Explanation:**
Modified binary search that continues searching left even after finding target to ensure we get the first occurrence.

## Constraints
- 0 <= nums.length <= 1000
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Array is non-decreasing (may contain duplicates)

## Solution Approach
1. Use modified binary search
2. When target is found, save index and continue searching left
3. Update high = mid - 1 to search left half
4. This ensures we find the leftmost occurrence

## Time Complexity
O(log n) - binary search

## Space Complexity
O(1) - constant space

## Tags
`binary-search` `array` `duplicates`
