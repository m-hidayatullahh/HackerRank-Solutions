function findFirstOccurrence(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let result = -1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        if (nums[mid] === target) {
            result = mid;
            high = mid - 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return result;
}

// Test cases
console.log(findFirstOccurrence([1, 2, 3, 4, 5], 3));        // 2
console.log(findFirstOccurrence([1, 2, 2, 2, 3], 2));        // 1
console.log(findFirstOccurrence([2, 2, 2, 2, 2], 2));        // 0
console.log(findFirstOccurrence([], 5));                      // -1
console.log(findFirstOccurrence([3], 3));                     // 0
console.log(findFirstOccurrence([1, 2, 3], 4));              // -1

module.exports = findFirstOccurrence;
