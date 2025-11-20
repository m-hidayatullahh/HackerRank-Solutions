const { removeKthNodeFromEnd, buildList, printList } = require('./solution');

console.log('Testing: One-Pass Removal of k-th Node from End\n');

const tests = [
    { 
        list: [5, 6, 7, 8], 
        k: 3, 
        expected: [6, 7, 8], 
        description: 'Remove head (k=3)' 
    },
    { 
        list: [5], 
        k: 1, 
        expected: [5], 
        description: 'Invalid k (k >= length)' 
    },
    { 
        list: [1, 2], 
        k: 0, 
        expected: [1], 
        description: 'Remove last node (k=0)' 
    },
    { 
        list: [1, 2, 3], 
        k: 1, 
        expected: [1, 3], 
        description: 'Remove middle node' 
    },
    { 
        list: [1, 2, 3, 4, 5], 
        k: 2, 
        expected: [1, 2, 4, 5], 
        description: 'Remove from middle of longer list' 
    },
    { 
        list: [1, 2, 3, 4, 5], 
        k: 4, 
        expected: [2, 3, 4, 5], 
        description: 'Remove first node' 
    }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const head = buildList(test.list);
    const result = printList(removeKthNodeFromEnd(head, test.k));
    const status = JSON.stringify(result) === JSON.stringify(test.expected) ? '✓ PASS' : '✗ FAIL';
    
    if (JSON.stringify(result) === JSON.stringify(test.expected)) {
        passed++;
    } else {
        failed++;
    }
    
    console.log(`Test ${index + 1}: ${status}`);
    console.log(`  Description: ${test.description}`);
    console.log(`  Input list: [${test.list}], k: ${test.k}`);
    console.log(`  Expected: [${test.expected}]`);
    console.log(`  Got: [${result}]`);
    console.log();
});

console.log(`Results: ${passed} passed, ${failed} failed out of ${tests.length} tests`);
process.exit(failed > 0 ? 1 : 0);
