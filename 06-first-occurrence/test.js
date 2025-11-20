const findFirstOccurrence = require('./solution');

console.log('Testing: Find First Occurrence\n');

const tests = [
    { nums: [1, 2, 3, 4, 5], target: 3, expected: 2, description: 'Example case' },
    { nums: [1, 2, 2, 2, 3], target: 2, expected: 1, description: 'Multiple occurrences' },
    { nums: [2, 2, 2, 2, 2], target: 2, expected: 0, description: 'All same values' },
    { nums: [], target: 5, expected: -1, description: 'Empty array' },
    { nums: [3], target: 3, expected: 0, description: 'Single element match' },
    { nums: [1, 2, 3], target: 4, expected: -1, description: 'Target not found' },
    { nums: [1, 3, 3, 3, 5], target: 3, expected: 1, description: 'First of many' },
    { nums: [1, 1, 1, 2, 3], target: 1, expected: 0, description: 'First element duplicates' }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const result = findFirstOccurrence(test.nums, test.target);
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
