function maximizeNonOverlappingMeetings(meetings) {
    if (meetings.length === 0) {
        return 0;
    }
    
    meetings.sort((a, b) => a[1] - b[1]);
    
    let count = 1;
    let lastEnd = meetings[0][1];
    
    for (let i = 1; i < meetings.length; i++) {
        if (meetings[i][0] >= lastEnd) {
            count++;
            lastEnd = meetings[i][1];
        }
    }
    
    return count;
}

// Test cases
console.log(maximizeNonOverlappingMeetings([[1, 2], [2, 3], [3, 4], [1, 3]])); // 3
console.log(maximizeNonOverlappingMeetings([[0, 5], [0, 1], [1, 2], [2, 3], [3, 5], [4, 6]])); // 4
console.log(maximizeNonOverlappingMeetings([[5, 10]])); // 1
console.log(maximizeNonOverlappingMeetings([[1, 2], [2, 3], [3, 4]])); // 3
console.log(maximizeNonOverlappingMeetings([])); // 0

module.exports = maximizeNonOverlappingMeetings;
