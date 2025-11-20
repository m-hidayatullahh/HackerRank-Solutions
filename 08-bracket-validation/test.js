const areBracketsProperlyMatched = require('./solution');

console.log('Testing: Validate Properly Nested Brackets\n');

const tests = [
    { input: 'if (a[0] > b[1]) { doSomething(); }', expected: true, description: 'Example case' },
    { input: 'int x = 42; // no brackets here', expected: true, description: 'No brackets' },
    { input: '() {} []', expected: true, description: 'All types matched' },
    { input: '(]', expected: false, description: 'Mismatched brackets' },
    { input: '([)]', expected: false, description: 'Wrong nesting' },
    { input: '((', expected: false, description: 'Unmatched opening' },
    { input: '))', expected: false, description: 'Unmatched closing' },
    { input: '', expected: true, description: 'Empty string' },
    { input: '{[()]}', expected: true, description: 'Nested properly' },
    { input: '((((()))))', expected: true, description: 'Multiple same type' }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const result = areBracketsProperlyMatched(test.input);
    const status = result === test.expected ? '✓ PASS' : '✗ FAIL';
    
    if (result === test.expected) {
        passed++;
    } else {
        failed++;
    }
    
    console.log(`Test ${index + 1}: ${status}`);
    console.log(`  Description: ${test.description}`);
    console.log(`  Input: "${test.input}"`);
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log();
});

console.log(`Results: ${passed} passed, ${failed} failed out of ${tests.length} tests`);
process.exit(failed > 0 ? 1 : 0);
