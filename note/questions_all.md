## Questions list for Excercise

###  1. Reverse String

Given a string, return a new string with the reversed
order of characters

--- Examples
 reverse('apple') === 'leppa'  
 reverse('hello') === 'olleh'  
 reverse('Greetings!') === '!sgniteerG'

###  2. Palindrome

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:
 palindrome("abba") === true
 palindrome("abcdefg") === false

###  3. Integer Reversal

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples
  reverseInt(15) === 51
  reverseInt(981) === 189
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9

###  4. Max Chars

Given a string, return the character that is most
commonly used in the string.

--- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"

###  5. fizzbuzz

Write a program that console logs the numbers
from 1 to n. But for multiples of three print
“fizz” instead of the number and for the multiples
of five print “buzz”. For numbers which are multiples
of both three and five print “fizzbuzz”.

--- Example
  fizzBuzz(5);
  1
  2
  fizz
  4
  buzz

###  6. Array chunk

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

###  7. Anagrams

Check to see if two provided strings are anagrams of eachother.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False

###  8. Sentence Capitalization

Write a function that accepts a string.  The function should
capitalize the first letter of each word in the string then
return the capitalized string.

--- Examples
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'

###  9. Printing Steps

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples
  steps(2)
      '# '
      '##'
  steps(3)
      '#  '
      '## '
      '###'
  steps(4)
      '#   '
      '##  '
      '### '
      '####'

### 10. Two Sided Steps - Pyramids

### 11. Find the Vowels

### 12. Enter the Matrix Spiral


