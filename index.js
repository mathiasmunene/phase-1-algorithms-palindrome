function isPalindrome(word) {
  // Initialize two pointers
  let left = 0;
  let right = word.length - 1;

  // Compare characters moving towards the center
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

/* 
  Pseudocode:
  1. Set left pointer at start of word (index 0)
  2. Set right pointer at end of word (last index)
  3. While left pointer is before right pointer:
     a. If characters at pointers don't match, return false
     b. Move left pointer right by 1
     c. Move right pointer left by 1
  4. If loop completes without mismatches, return true
*/

/*
  Explanation:
  This solution uses a two-pointer approach to check for palindromes efficiently.
  We compare characters from both ends moving towards the center:
  - If any pair doesn't match, it's not a palindrome
  - If all pairs match until pointers meet/cross, it is a palindrome
  This approach has O(n) time complexity (where n is word length) and O(1) space complexity.
*/

// Custom test cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar")); // true

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot")); // false

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a")); // single letter

  console.log("Expecting: true");
  console.log("=>", isPalindrome("")); // empty string

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab")); // even length non-palindrome
}

module.exports = isPalindrome;