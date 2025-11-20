function binarySearch(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return -1;
}

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 3));              // 2
console.log(binarySearch([2, 4, 6, 8, 10, 12, 14, 16], 16)); // 7
console.log(binarySearch([], 5));                            // -1
console.log(binarySearch([10], 10));                         // 0
console.log(binarySearch([1, 3, 5, 7, 9], 6));              // -1
console.log(binarySearch([1, 3, 5, 7, 9], 1));              // 0

module.exports = binarySearch;
