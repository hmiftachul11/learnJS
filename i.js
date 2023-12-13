function findSubstring(s, k) {
  function isVowel(char) {
    return ["a", "e", "i", "o", "u"].includes(char);
  }

  let maxVowels = 0;
  let maxSubstring = "";

  for (let i = 0; i <= s.length - k; i++) {
    let substring = s.substring(i, i + k);
    let vowelCount = 0;

    for (let char of substring) {
      if (isVowel(char)) {
        vowelCount++;
      }
    }

    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      maxSubstring = substring;
    }
  }

  return maxSubstring;
}

// Sample Input
let s = "azerdii";
let k = 5;

// Output
console.log(findSubstring(s, k));
