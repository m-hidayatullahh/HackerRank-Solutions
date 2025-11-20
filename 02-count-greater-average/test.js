const countResponseTimeRegressions = require('./solution');

console.log('Testing: Count Elements Greater Than Previous Average\n');

const tests = [
    { input: [100, 200, 150, 300], expected: 2, description: 'Example case' },
    { input: [], expected: 0, description: 'Empty array' },
    { input: [100], expected: 0, description: 'Single element' },
    { input: [100, 50], expected: 0, description: 'Decreasing values' },
    { input: [100, 200, 300], expected: 2, description: 'All increasing' },
    { input: [5, 5, 5, 5], expected: 0, description: 'All same values' }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const result = countResponseTimeRegressions(test.input);
    const status = result === test.expected ? '✓ PASS' : '✗ FAIL';
    
    if (result === test.expected) {
        passed++;
    } else {
        failed++;
    }
    
    console.log(`Test ${index + 1}: ${status}`);
    console.log(`  Description: ${test.description}`);
    console.log(`  Input: [${test.input}]`);
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log();
});

console.log(`Results: ${passed} passed, ${failed} failed out of ${tests.length} tests`);
process.exit(failed > 0 ? 1 : 0);
