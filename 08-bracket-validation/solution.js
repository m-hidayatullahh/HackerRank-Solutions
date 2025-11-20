function areBracketsProperlyMatched(code_snippet) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of code_snippet) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

// Test cases
console.log(areBracketsProperlyMatched("if (a[0] > b[1]) { doSomething(); }")); // true
console.log(areBracketsProperlyMatched("int x = 42; // no brackets here"));     // true
console.log(areBracketsProperlyMatched("() {} []"));                            // true
console.log(areBracketsProperlyMatched("(]"));                                  // false
console.log(areBracketsProperlyMatched("([)]"));                                // false
console.log(areBracketsProperlyMatched("(("));                                  // false

module.exports = areBracketsProperlyMatched;
