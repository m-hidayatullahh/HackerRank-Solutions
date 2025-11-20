# Check Palindrome by Filtering Non-Letters

## Difficulty
Easy

## Problem Statement
Given a string containing letters, digits, and symbols, determine if it reads the same forwards and backwards when considering only alphabetic characters (case-insensitive).

## Example

**Input:**
```
A1b2B!a
```

**Output:**
```
1
```

**Explanation:**
- Step 1: Extract only letters → ['A','b','B','a'] 
- Step 2: Convert to lowercase → ['a','b','b','a'] 
- Step 3: Compare sequence forward and backward: 'abba' == 'abba' → true

## Constraints
- 0 <= code.length <= 1000
- ASCII characters only (33-126)

## Solution Approach
1. Filter only alphabetic characters using regex
2. Convert to lowercase
3. Compare with reversed string

## Time Complexity
O(n) - where n is the length of the string

## Space Complexity
O(n) - for the filtered string

## Tags
`string` `palindrome` `regex`
