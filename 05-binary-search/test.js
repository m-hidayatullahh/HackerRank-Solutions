const binarySearch = require('./solution');

console.log('Testing: Target Index Search (Binary Search)\n');

const tests = [
    { nums: [1, 2, 3, 4, 5], target: 3, expected: 2, description: 'Example case' },
    { nums: [2, 4, 6, 8, 10, 12, 14, 16], target: 16, expected: 7, description: 'Target at end' },
    { nums: [], target: 5, expected: -1, description: 'Empty array' },
    { nums: [10], target: 10, expected: 0, description: 'Single element match' },
    { nums: [1, 3, 5, 7, 9], target: 6, expected: -1, description: 'Target not found' },
    { nums: [1, 3, 5, 7, 9], target: 1, expected: 0, description: 'Target at start' },
    { nums: [1, 3, 5, 7, 9], target: 9, expected: 4, description: 'Target at end' },
    { nums: [1, 3, 5, 7, 9], target: 5, expected: 2, description: 'Target in middle' }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const result = binarySearch(test.nums, test.target);
    const status = result === test.expected ? '✓ PASS' : '✗ FAIL';
    
    if (result === test.expected) {
        passed++;
    } else {
        failed++;
    }
    
    console.log(`Test ${index + 1}: ${status}`);
    console.log(`  Description: ${test.description}`);
    console.log(`  nums: [${test.nums}], target: ${test.target}`);
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log();
});

console.log(`Results: ${passed} passed, ${failed} failed out of ${tests.length} tests`);
process.exit(failed > 0 ? 1 : 0);
