
### Hint

Use 'RegExp', it's short for a 'Regular Expression'.
**\w** : Matches any alphanumeric character from the basic Latin alphabet,
  includeing the underscore. Equivalent to [A-Za-z0-9\_].

For example,
```js
const word = "HI THERE!!!"
word.replace(/[^\w]/g, "");
```
The result is "HITHERE".

And we are working with a lowercase string only, so use 'toLowerCase'.
```js
const word = "HI THERE!!!"
word.replace(/[^\w]/g, "").toLowerCase();
```
The result is "hithere".

### Easiest, Straightforward solution

#### workflow
```js
```
###### 1. Make a helper function to avoid seperate iterating with 2 strings 
```js
function buildCharMap( str ){
}
```
###### 2. Create an empty object to serve as our character map to iterate
```js
function buildCharMap( str ){
  const charMap = {};
}
```
###### 3. We need to strip out any spaces or any punctuation
```js
function buildCharMap( str ){
  const charMap = {};
  
  for( let char of str.replace(/[^\w]/g, '').toLowerCase() ){
  }
}
```
###### 4. Take our character map, assign a key to the character map of 
the current character we are looking at, then increment the value out that character.
```js
function buildCharMap( str ){
  const charMap = {};
  
  for( let char of str.replace(/[^\w]/g, '').toLowerCase() ){
    charMap[char] = charMap[char] + 1 || 1;
  }
}
```
###### 5. Don't forget to return the charMap
```js
function buildCharMap( str ){
  const charMap = {};
  
  for( let char of str.replace(/[^\w]/g, '').toLowerCase() ){
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
```
Now, we can use this helper function to produce a character map both string A
and B.

###### 6. Using buildCharMap function
```js
function anagrams( stringA, stringB ) {
  const aCharMap = buildCharMap( stringA );
  const bCharMap = buildCharMap( stringB );
}
```
###### 7. Compare the length of the two character or the two strings 
- Pull out all the keys from both objects(aCharMap, bCharMap)
- Count the number of keys that is contained in both

This is a simple example of pulling out the keys from obect
```js
const obj = {
   a: 1,
   b: 1,
   c: 1
};

Object.keys( obj );
```
The result is ["a","b","c"].
And the number of the keys,
```js
const obj = {
   a: 1,
   b: 1,
   c: 1
};

Object.keys( obj ).length;
```
The result is '3'.

- So, we are going to do this
```js
function anagrams( stringA, stringB ) {
  const aCharMap = buildCharMap( stringA );
  const bCharMap = buildCharMap( stringB );

  if ( Object.keys( aCharMap ).length !== Object.keys( bCharMap ).length ) {
    return false;
  }
}
```
- Now, if they have the same number of characters, we will look at each one of
these characters and compare the number of uses that it has to the other map.

###### 8. Iterate over one charMap look at every character inside of it and compare both
```js
function anagrams( stringA, stringB ) {
  const aCharMap = buildCharMap( stringA );
  const bCharMap = buildCharMap( stringB );

  if ( Object.keys( aCharMap ).length !== Object.keys( bCharMap ).length ) {
    return false;
  }

  for ( let char in aCharMap ) {
  }
}
```

- If aCharMap[char] is not equal to the bCharmap[char], it means wrong.
```js
  for ( let char in aCharMap ) {
    if ( aCharMap[char] !== bCharMap[char] ) {
      return false;
```
- And through the function, if we are not returned false, it must be the
'anagrams' and it returns true.
```js
function anagrams( stringA, stringB ) {
  const aCharMap = buildCharMap( stringA );
  const bCharMap = buildCharMap( stringB );

  if ( Object.keys( aCharMap ).length !== Object.keys( bCharMap ).length ) {
    return false;
  }

  for ( let char in aCharMap ) {
    if ( aCharMap[char] !== bCharMap[char] ) {
      return false;
    }
  }

  return true;
}
```
*Important* for( let char **'in'** ~ ), not 'of'.

- - -

### Alternate solution (more Straightforward)

###### What we are going to Use

Let me introduce this awesome function, 'sort'.
```js
const numbers = [ 10, 30, 5, -90, 10000 ];
const chars   = [ 'z', 'c', 'b', 'd' ];
numbers.sort();
chars.sort();
```
The results are [ -90, 10, 10000, 30, 5 ], [ "b","c","d","z" ].

- We are going to take 2 inputs.
- Clean up them by replacing(removing) any spaces or punctuation.
- Make them Lower Case.
- Sort them, so no matter what they have inside they will end up in the exact
same order.
- The two sorted strings are now completely identical, we can decide they are
anagrams or not.

###### 1. Make a helper function to clean strings
```js
function cleanString( str ) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}
```
- And we are going to use sort method, but it belongs to arrays not strings.
- So we have to temporarily turn this string into an array, sort it and then
turn it back into a string.
```js
function cleanString( str ) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
```
###### 2. Now we can just compare them
```js
function anagrams( stringA, stringB ) {
  cleanString( stringA ) === cleanString( stringB );
}
```
**Do not forget to return**
```js
function anagrams( stringA, stringB ) {
  return cleanString( stringA ) === cleanString( stringB );
}
```


