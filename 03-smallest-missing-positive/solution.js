function findSmallestMissingPositive(orderNumbers) {
    const n = orderNumbers.length;
    
    if (n === 0) {
        return 1;
    }
    
    for (let i = 0; i < n; i++) {
        while (orderNumbers[i] > 0 &&
               orderNumbers[i] <= n &&
               orderNumbers[orderNumbers[i] - 1] !== orderNumbers[i]) {
            
            const correctPos = orderNumbers[i] - 1;
            const temp = orderNumbers[i];
            orderNumbers[i] = orderNumbers[correctPos];
            orderNumbers[correctPos] = temp;
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (orderNumbers[i] !== i + 1) {
            return i + 1;
        }
    }
    
    return n + 1;
}

// Test cases
console.log(findSmallestMissingPositive([3, 4, -1, 1]));  // 2
console.log(findSmallestMissingPositive([]));              // 1
console.log(findSmallestMissingPositive([1]));             // 2
console.log(findSmallestMissingPositive([1, 2, 0]));       // 3
console.log(findSmallestMissingPositive([7, 8, 9, 11]));   // 1
console.log(findSmallestMissingPositive([1, 1, 1]));       // 2

module.exports = findSmallestMissingPositive;
