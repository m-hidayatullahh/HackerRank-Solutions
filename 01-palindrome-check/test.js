const isAlphabeticPalindrome = require('./solution');

console.log('Testing: Check Palindrome by Filtering Non-Letters\n');

const tests = [
    { input: 'A1b2B!a', expected: true, description: 'Example case' },
    { input: 'Z', expected: true, description: 'Single letter' },
    { input: 'abc123cba', expected: true, description: 'Letters with numbers' },
    { input: 'hello', expected: false, description: 'Not a palindrome' },
    { input: '', expected: true, description: 'Empty string' },
    { input: '12345', expected: true, description: 'Only numbers (no letters)' },
    { input: 'A man, a plan, a canal: Panama', expected: true, description: 'Classic palindrome' }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const result = isAlphabeticPalindrome(test.input);
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
