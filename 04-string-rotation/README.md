# Check for Non-Identical String Rotation

## Difficulty
Easy

## Problem Statement
Given two strings s1 and s2, return 1 if s2 is a rotation of s1 but not identical to s1, otherwise return 0.

## Example

**Input:**
```
s1 = "abcde"
s2 = "cdeab"
```

**Output:**
```
1
```

**Explanation:**
- s2 ('cdeab') is a non-trivial rotation of s1 ('abcde')
- If you rotate 'abcde' left by 2 positions, you get 'cdeab'
- Since s2 is not equal to s1 and is a rotation, the output is true

## Constraints
- 1 <= |s1| <= 1000
- 1 <= |s2| <= 1000
- |s1| = |s2|
- Both strings consist of lowercase English letters only

## Solution Approach
1. Check if lengths are equal
2. Check if strings are identical (return false if yes)
3. Check if s2 is substring of (s1 + s1)
4. If s2 is rotation, it will be found in concatenated string

## Time Complexity
O(n) - includes() uses efficient string matching

## Space Complexity
O(n) - creating s1 + s1

## Tags
`string` `rotation` `substring`
