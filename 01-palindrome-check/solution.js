function isAlphabeticPalindrome(code) {
    const letters = code.toLowerCase().replace(/[^a-z]/g, '');
    return letters === letters.split('').reverse().join('');
}

// Test cases
console.log(isAlphabeticPalindrome('A1b2B!a'));  // true
console.log(isAlphabeticPalindrome('Z'));         // true
console.log(isAlphabeticPalindrome('abc123cba')); // true
console.log(isAlphabeticPalindrome('hello'));     // false

module.exports = isAlphabeticPalindrome;
