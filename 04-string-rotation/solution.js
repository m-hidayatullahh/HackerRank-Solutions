function isNonTrivialRotation(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    
    if (s1 === s2) {
        return false;
    }
    
    return (s1 + s1).includes(s2);
}

// Test cases
console.log(isNonTrivialRotation("abcde", "cdeab")); // true
console.log(isNonTrivialRotation("a", "a"));          // false
console.log(isNonTrivialRotation("a", "b"));          // false
console.log(isNonTrivialRotation("abc", "bca"));      // true
console.log(isNonTrivialRotation("abc", "cab"));      // true
console.log(isNonTrivialRotation("abc", "xyz"));      // false

module.exports = isNonTrivialRotation;
