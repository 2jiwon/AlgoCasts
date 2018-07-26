
### Hint

#### Trick

**Common String Questions**
+ What is the most common character in the string?
+ Does string A have the same characters as string B?
+ Does the given string have any repeated characters in it?

**We can use this technique for those questions**
+ Take the string and convert into an object
  - The keys of the object are the characters from the string  
  - The values are the number of times that the character has been found  


+ Create some new string
```js
const string = "Hello There!";
```
+ Make a new object
```js
const chars = {};
```
+ 2 ways to take the characters and add them to the object
  - Way1. split the string into an array and then use foreach helper to loop over the
  characters
  - **Way2.** use for/of loop to look through all the characters then do the same
  thing as way1.

+ 'For' every characher inside the string, add the character as property and
assign it a value of 1 or if we've already seen that character then add 1 to it.
  - In this case, 'char' is the index notation.
```js
for (let char of string) {
  chars[char]
```
+ If it the first time that we are seeing this character, we want to set its
value to 1.
  - *If we don't set this to 1, the 'chars' will evaluate to undefined.* So,
  don't forget to do this.
```js
for (let char of string) {
  if (!chars[char]) {
    chars[char] = 1;
  }
}
```
+ Otherwise, assuming that there is a number already there, take the char and
increment it by 1.
```js
for (let char of string) {
  if (!chars[char]) {
    chars[char] = 1;
  } else {
    chars[char]++;
  }
}
```
+ At the end, we can print out 'chars'.
```js
chars;
```
> { "H":1,
    "e":3,
    "l":2,
    "o":1,
    " ":1,
    "T":1,
    "h":1,
    "r":1,
    "!":1
  }

+ Simplify the 'for' loop.
  - If the former('chars[char] + 1') is falsy, assign '1' to the 'chars[char]'.
```js
for (let char of string) {
  chars[char] = chars[char] + 1 || 1;
}
```

### Easiest, Straightforward solution

#### workflow

###### 1. Declare a new variable as an empty object
```js
const charMap = {};
```
###### 2. Iterate over passed string and use it to build out the character map
```js
for (let char of str) {
}
```
###### 3. For every character we receive, add an entry to character map.  
If an entry already exists there, just add 1 to the number.
```js
for (let char of str) {
  if (charMap[char]) {
    charMap[char]++;
  } else {
    charMap[char] = 1;
  }
}
```
###### 4. Declare to helper variables
```js
let max = 0;
let maxChar = '';
```
###### 5. Iterate through the character map to find a character that used the most.  
If we ever find a character than has more uses than max, then we will set max
equal to that new value, and set maxChar to a character of that number of uses.

**for/of vs for/in**
+ for/of : iterating through an array or a string or any type 
+ for/in : iterating through an object 

```js
for (let char in charMap) {
  if (charMap[char] > max) {
    max = charMap[char];
    maxChar = char;
  }
}
```
###### 6. Return the maxChar

- - -

### Alternate - none

- - -
