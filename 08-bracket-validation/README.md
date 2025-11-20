# Validate Properly Nested Brackets

## Difficulty
Easy

## Problem Statement
Given a string, check if all brackets ('()', '{}', '[]') are properly matched and nested. Return 1 if valid, otherwise return 0.

## Example

**Input:**
```
if (a[0] > b[1]) { doSomething(); }
```

**Output:**
```
1
```

**Explanation:**
All brackets are properly matched: '(' with ')', '[' with ']', and '{' with '}'. No mismatches or improper nesting.

## Constraints
- 0 <= code_snippet.length <= 1000
- String consists of printable ASCII characters (32-126)
- May contain any combination of brackets, letters, digits, and symbols

## Solution Approach
1. Use a stack to track opening brackets
2. For each character:
   - If opening bracket: push to stack
   - If closing bracket: pop and validate match
   - Otherwise: ignore
3. Stack must be empty at the end

## Time Complexity
O(n) - single pass through string

## Space Complexity
O(n) - worst case all opening brackets

## Tags
`stack` `string` `brackets` `validation`
