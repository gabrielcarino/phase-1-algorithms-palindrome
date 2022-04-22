function isPalindrome(word) {
  // Write your algorithm here
  const wordLength = word.length;
  let matchesNum = 0
  let numOfTests = 0
  for (let i = 0; i < (wordLength/2); i++) {
    if (word[i] === word[(wordLength-(1+i))]) {
      matchesNum++;
    };
    numOfTests++;
  }
  if (matchesNum === numOfTests) {
    return true;
  }
  else return false;
}

/* 
  Add your pseudocode here
  given (word), test each index of (word) against 
  its correlated index from the end of the word
  if each is true: return true
  if any do not match return false
*/

/*
  Add written explanation of your solution here
  when isPalindrome() is passed a string, take 
  and compare it to the last lett,
  second letter to secon to last... etc.
  if all letters are === to their counterparts,
  return true
  else return false
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
