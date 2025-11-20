const isNonTrivialRotation = require('./solution');

console.log('Testing: Check for Non-Identical String Rotation\n');

const tests = [
    { s1: 'abcde', s2: 'cdeab', expected: true, description: 'Example case' },
    { s1: 'a', s2: 'a', expected: false, description: 'Identical single char' },
    { s1: 'a', s2: 'b', expected: false, description: 'Different single char' },
    { s1: 'abc', s2: 'bca', expected: true, description: 'Valid rotation' },
    { s1: 'abc', s2: 'cab', expected: true, description: 'Another valid rotation' },
    { s1: 'abc', s2: 'xyz', expected: false, description: 'Different strings' },
    { s1: 'hello', s2: 'hello', expected: false, description: 'Identical strings' },
    { s1: 'abc', s2: 'acb', expected: false, description: 'Not a rotation' }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const result = isNonTrivialRotation(test.s1, test.s2);
    const status = result === test.expected ? '✓ PASS' : '✗ FAIL';
    
    if (result === test.expected) {
        passed++;
    } else {
        failed++;
    }
    
    console.log(`Test ${index + 1}: ${status}`);
    console.log(`  Description: ${test.description}`);
    console.log(`  s1: "${test.s1}", s2: "${test.s2}"`);
    console.log(`  Expected: ${test.expected}, Got: ${result}`);
    console.log();
});

console.log(`Results: ${passed} passed, ${failed} failed out of ${tests.length} tests`);
process.exit(failed > 0 ? 1 : 0);
