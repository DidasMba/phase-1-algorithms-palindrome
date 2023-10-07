function testIsPalindrome() {
  console.log(isPalindrome("abba") === true); // Test case 1
  console.log(isPalindrome("racecar") === true); // Test case 2
  console.log(isPalindrome("a") === true); // Test case 3
  console.log(isPalindrome("robot") === false); // Test case 4
  console.log(isPalindrome("ab") === false); // Test case 5
}

testIsPalindrome();


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
