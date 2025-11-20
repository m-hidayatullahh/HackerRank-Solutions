# Target Index Search (Binary Search)

## Difficulty
Easy

## Problem Statement
Given a sorted array of distinct integers and a target value, return the index of the target or -1 if not found.

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
Initialize low = 0, high = 4. Compute mid = 2. nums[2] = 3 matches target, so return 2.

## Constraints
- 0 <= nums.length <= 10^6
- -10^9 <= nums[i] <= 10^9
- Array is strictly increasing
- -10^9 <= target <= 10^9

## Solution Approach
1. Initialize low = 0, high = length - 1
2. While low <= high:
   - Calculate mid = (low + high) / 2
   - If nums[mid] == target: return mid
   - If nums[mid] < target: search right (low = mid + 1)
   - If nums[mid] > target: search left (high = mid - 1)
3. Return -1 if not found

## Time Complexity
O(log n) - binary search halves search space each iteration

## Space Complexity
O(1) - constant space

## Tags
`binary-search` `array` `search`
