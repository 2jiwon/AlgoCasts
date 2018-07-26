
### Hint, how to approach

**String.prototype.slice()**

slice() method will take some number of elements out of that string.
The first argument is the index of that string to start from.
And then the second(optional) argument would be the end index.

- Now, look at this example.

```js
const word = "there";

word.slice(1);
```
The result is 'here'.

- Then, use 'toUpperCase'
```js
const word = "there";

word[0].toUpperCase();
word.slice(1);
```
The results are

```shellscript
T
here
```
### Easiest, Straightforward solution

#### workflow

###### 1. Make an empty array 'words'
```js
function capitalize( str ) {
  const words = [];
}
```
###### 2. Split the input string by spaces to get an array
```js
function capitalize( str ) {
  const words = [];
   
  str.split(' ')
}
```

###### 3. For each word in the array,
```js
function capitalize( str ) {
  const words = [];
   
  for( let word of str.split(' ') ) {
  }
}
```
- Uppercase the first letter of the word
```js
  for( let word of str.split(' ') ) {
    word[0].toUpperCase();
  }
}
```
- Join first letter with rest of the String.
- Here, use 'slice(1)'. This means slice the array from index 1 to the rest of array.  
So we can get the string except the first letter!
```js
  for( let word of str.split(' ') ) {
    word[0].toUpperCase() + word.slice(1);
  }
}
```
- Push result into words array
```js
  for( let word of str.split(' ') ) {
   words.push( word[0].toUpperCase() + word.slice(1) );
  }
}
```

###### 4. Join 'words' into a string and return it

```js
function capitalize( str ) {
  const words = [];

  for( let word of str.split(' ') ) {
    words.push( word[0].toUpperCase() + word.slice(1) );
  }

  return words.join(' ');
```
- - -

### Alternate solution 

###### 1. Create an empty string called 'result'

The first letter should be capitalized all the time.  
```js
function capitalize( str ) {
  let result = str[0].toUpperCase();
}
```

###### 2. For each character in the String

We are going to iterate through from second character.  
```js
for( let i = 1; i < str.length; i++) {
```
- If the character to the left a space
```js
for( let i = 1; i < str.length; i++) {
  if ( str[i - 1] === ' ' )
```
- Capitalize it and add it to 'result'
```js
for( let i = 1; i < str.length; i++) {
  if ( str[i - 1] === ' ' ) {
    result += str[i].toUpperCase();
  }
```
- Else, add it to 'result'
```js
for( let i = 1; i < str.length; i++) {
  if ( str[i - 1] === ' ' ) {
    result += str[i].toUpperCase();
  } else {
    result += str[i];
  }
}
```
###### 3. Do not forget to return the result

