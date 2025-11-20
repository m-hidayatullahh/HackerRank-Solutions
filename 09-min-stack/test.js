const processCouponStackOperations = require('./solution');

console.log('Testing: Min-Tracking Stack Implementation\n');

const tests = [
    { 
        input: ['push 2', 'push 0', 'push 3', 'push 0', 'getMin', 'pop', 'getMin', 'pop', 'top', 'getMin'], 
        expected: [0, 0, 0, 0], 
        description: 'Example case' 
    },
    { 
        input: ['push 5', 'getMin'], 
        expected: [5], 
        description: 'Single element getMin' 
    },
    { 
        input: ['push 0', 'top'], 
        expected: [0], 
        description: 'Single element top' 
    },
    { 
        input: ['push 1', 'push 2', 'getMin', 'push 0', 'getMin'], 
        expected: [1, 0], 
        description: 'Decreasing min' 
    },
    { 
        input: ['push 3', 'push 1', 'push 2', 'getMin', 'pop', 'getMin'], 
        expected: [1, 1], 
        description: 'Min preserved after pop' 
    },
    { 
        input: ['push 5', 'push 5', 'push 5', 'getMin', 'top'], 
        expected: [5, 5], 
        description: 'All same values' 
    }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const result = processCouponStackOperations(test.input);
    const status = JSON.stringify(result) === JSON.stringify(test.expected) ? '✓ PASS' : '✗ FAIL';
    
    if (JSON.stringify(result) === JSON.stringify(test.expected)) {
        passed++;
    } else {
        failed++;
    }
    
    console.log(`Test ${index + 1}: ${status}`);
    console.log(`  Description: ${test.description}`);
    console.log(`  Operations: ${test.input.length} operations`);
    console.log(`  Expected: [${test.expected}]`);
    console.log(`  Got: [${result}]`);
    console.log();
});

console.log(`Results: ${passed} passed, ${failed} failed out of ${tests.length} tests`);
process.exit(failed > 0 ? 1 : 0);
