const maximizeNonOverlappingMeetings = require('./solution');

console.log('Testing: Maximum Non-Overlapping Intervals\n');

const tests = [
    { 
        input: [[1, 2], [2, 3], [3, 4], [1, 3]], 
        expected: 3, 
        description: 'Example case 1' 
    },
    { 
        input: [[0, 5], [0, 1], [1, 2], [2, 3], [3, 5], [4, 6]], 
        expected: 4, 
        description: 'Example case 2' 
    },
    { 
        input: [[5, 10]], 
        expected: 1, 
        description: 'Single interval' 
    },
    { 
        input: [[1, 2], [2, 3], [3, 4]], 
        expected: 3, 
        description: 'Non-overlapping consecutive' 
    },
    { 
        input: [], 
        expected: 0, 
        description: 'Empty array' 
    },
    { 
        input: [[1, 5], [2, 3], [4, 6]], 
        expected: 2, 
        description: 'Overlapping intervals' 
    }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const inputCopy = JSON.parse(JSON.stringify(test.input));
    const result = maximizeNonOverlappingMeetings(test.input);
    const status = result === test.expected ? '✓ PASS' : '✗ FAIL';
    
    if (result === test.expected) {
        passed++;
    } else {
        failed++;
    }
    
    console.log(`Test ${index + 1}: ${status}`);
    console.log(`  Description: ${test.description}`);
    console.log(`  Input: ${JSON.stringify(inputCopy)}`);
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log();
});

console.log(`Results: ${passed} passed, ${failed} failed out of ${tests.length} tests`);
process.exit(failed > 0 ? 1 : 0);
