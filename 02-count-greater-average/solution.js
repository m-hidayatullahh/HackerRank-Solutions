function countResponseTimeRegressions(responseTimes) {
    if (responseTimes.length <= 1) {
        return 0;
    }
    
    let count = 0;
    let sum = responseTimes[0];
    
    for (let i = 1; i < responseTimes.length; i++) {
        const average = sum / i;
        
        if (responseTimes[i] > average) {
            count++;
        }
        
        sum += responseTimes[i];
    }
    
    return count;
}

// Test cases
console.log(countResponseTimeRegressions([100, 200, 150, 300])); // 2
console.log(countResponseTimeRegressions([]));                    // 0
console.log(countResponseTimeRegressions([100]));                 // 0
console.log(countResponseTimeRegressions([100, 50]));             // 0
console.log(countResponseTimeRegressions([100, 200, 300]));       // 2

module.exports = countResponseTimeRegressions;
