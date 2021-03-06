// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every(( char, i ) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

//---- Answers
//function palindrome(str) {
//  const reversed = str
//                    .split('')
//                    .reverse()
//                    .join('');
//  return str === reversed;
//}

//function palindrome(str) {
//  return str.split('').every(( char, i ) => {
//    return char === str[str.length - i - 1];
//}



//----- Below are mine
//function palindrome(str) {
//  let reversed = '';
//  reversed = str.split('').reverse().join('');
//
//  if (str === reversed) {
//    return true;
//  } else {
//    return false;
//  }
//}

//function palindrome(str) {
//  let reversed = str.split('').reverse().join('');
//  return (str === reversed) ? true : false;
//}
//

//function palindrome(str) {
//  let reversed = '';
//
//  for (let character of str) {
//    reversed = character + reversed;
//  }
//
//  return reversed === str;
//}

//function palindrome(str) {
//  let reversed = str.split('').reduce(( rev, char ) => char + rev, '');
//  return (reversed === str) ? true : false;
//}

