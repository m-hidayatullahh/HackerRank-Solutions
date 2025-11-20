const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('='.repeat(70));
console.log('Running All HackerRank Solution Tests');
console.log('='.repeat(70));
console.log();

const problems = [
    '01-palindrome-check',
    '02-count-greater-average',
    '03-smallest-missing-positive',
    '04-string-rotation',
    '05-binary-search',
    '06-first-occurrence',
    '07-max-intervals',
    '08-bracket-validation',
    '09-min-stack',
    '10-remove-kth-node'
];

let totalPassed = 0;
let totalFailed = 0;

problems.forEach((problem, index) => {
    const testPath = path.join(__dirname, problem, 'test.js');
    
    if (!fs.existsSync(testPath)) {
        console.log(`opss Test file not found: ${problem}/test.js`);
        return;
    }
    
    console.log(`\n${'='.repeat(70)}`);
    console.log(`Problem ${index + 1}/${problems.length}: ${problem}`);
    console.log('='.repeat(70));
    
    try {
        execSync(`node "${testPath}"`, { 
            cwd: __dirname,
            stdio: 'inherit'
        });
        totalPassed++;
    } catch (error) {
        totalFailed++;
        console.log(`\n❌ Tests failed for ${problem}`);
    }
});

console.log('\n' + '='.repeat(70));
console.log('FINAL RESULTS');
console.log('='.repeat(70));
console.log(`✅ Problems passed: ${totalPassed}/${problems.length}`);
console.log(`❌ Problems failed: ${totalFailed}/${problems.length}`);
console.log('='.repeat(70));

if (totalFailed > 0) {
    process.exit(1);
}
