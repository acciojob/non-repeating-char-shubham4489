function firstNonRepeatedChar(str) {
    // Step 1: Create an empty object to store character counts
    let charCount = {};

    // Step 2: Iterate through the string and count each character
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Step 3: Iterate through the string again to find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Step 4: If no non-repeated character is found, return null
    return null;
}

// Example usage
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
