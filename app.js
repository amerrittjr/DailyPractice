function isPalindrome(str) {
  let normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let reversedNormalizedStr = normalized.split("").reverse().join("");

  return normalized === reversedNormalizedStr;
}

console.log(isPalindrome("racecar"));
