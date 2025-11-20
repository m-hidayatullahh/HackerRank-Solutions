function processCouponStackOperations(operations) {
    const mainStack = [];
    const minStack = [];
    const results = [];
    
    for (let op of operations) {
        if (op.startsWith('push')) {
            const value = parseInt(op.split(' ')[1]);
            mainStack.push(value);
            
            if (minStack.length === 0) {
                minStack.push(value);
            } else {
                minStack.push(Math.min(value, minStack[minStack.length - 1]));
            }
        } else if (op === 'pop') {
            mainStack.pop();
            minStack.pop();
        } else if (op === 'top') {
            results.push(mainStack[mainStack.length - 1]);
        } else if (op === 'getMin') {
            results.push(minStack[minStack.length - 1]);
        }
    }
    
    return results;
}

// Test cases
console.log(processCouponStackOperations(['push 2', 'push 0', 'push 3', 'push 0', 'getMin', 'pop', 'getMin', 'pop', 'top', 'getMin']));
// [0, 0, 0, 0]

console.log(processCouponStackOperations(['push 5', 'getMin']));
// [5]

console.log(processCouponStackOperations(['push 0', 'top']));
// [0]

module.exports = processCouponStackOperations;
