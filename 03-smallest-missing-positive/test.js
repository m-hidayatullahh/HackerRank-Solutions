const findSmallestMissingPositive = require('./solution');

console.log('Testing: Find the Smallest Missing Positive Integer\n');

const tests = [
    { input: [3, 4, -1, 1], expected: 2, description: 'Example case' },
    { input: [], expected: 1, description: 'Empty array' },
    { input: [1], expected: 2, description: 'Single element [1]' },
    { input: [1, 2, 0], expected: 3, description: 'Sequential with zero' },
    { input: [7, 8, 9, 11], expected: 1, description: 'All large numbers' },
    { input: [1, 1, 1], expected: 2, description: 'Duplicates' },
    { input: [2], expected: 1, description: 'Missing 1' },
    { input: [1, 2, 3], expected: 4, description: 'Complete sequence' }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const inputCopy = [...test.input];
    const result = findSmallestMissingPositive(test.input);
    const status = result === test.expected ? '✓ PASS' : '✗ FAIL';
    
    if (result === test.expected) {
        passed++;
    } else {
        failed++;
    }
    
    console.log(`Test ${index + 1}: ${status}`);
    console.log(`  Description: ${test.description}`);
    console.log(`  Input: [${inputCopy}]`);
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log();
});

console.log(`Results: ${passed} passed, ${failed} failed out of ${tests.length} tests`);
process.exit(failed > 0 ? 1 : 0);
