function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Compare the original string with its reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}

// Example usage:
const testString = "A man, a plan, a canal, Panama!";
const result = isPalindrome(testString);

if (result) {
  console.log(`${testString} is a palindrome.`);
} else {
  console.log(`${testString} is not a palindrome.`);
}
