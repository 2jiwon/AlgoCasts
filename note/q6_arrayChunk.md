
### Hint


### Easiest, Straightforward solution

#### workflow
This 'chunk' function has 2 parameters. array and size
```js
function chunk( array, size ) {
}
```
###### 1. Create empty array to hold chunks called 'chunked' 
```js
const chunked = [];
```
###### 2. Iterate through the original unchunked array(passed parameter)
+ For each element in the unchunked array
```js
for (let element of array) {
}
```
  - Retrieve the last element in 'chunked'  
```js
for (let element of array) {
  const last = chunked[chunked.length - 1];
}
```
  - If last element does not exist, or if its length is equal to chunk size
```js
for (let element of array) {
  const last = chunked[chunked.length - 1];

  if (!last || last.length === size)
}
```
    - Push a new chunk into 'chunked' with the current element
```js
  if (!last || last.length === size) {
    chunked.push( [element] );
  }
```
  - Else add the current element into the chunk
```js
  } else {
    last.push( element );
  }
```
###### 3. Don't forget to return the chunked array.
```js
return chunked;
```
- - -

### Alternate solution

###### function 'slice()'
slice function is making a copy of the original array.
It takes parameters as 'start index' and 'end index'.
So, below codes is going to make an array and it would be like ["a","b","c"].
```js
const letters = ['a', 'b', 'c', 'd', 'e'];
letters.slice( 0, 3 );
```
The 'end index' means not exactly the 'end', it means more likely, 'up to end'.
So the 'slice( 0, 3 )' means that it start with 'a'([0]) and up to [3] which
matches'a'~'c'.

###### 1. Create an empty chunked array
```js
const chunked = [];
```
###### 2. Create index start at 0
```js
let index = 0;
```
###### 3. While index is less than array.length
- Push a slice of length 'size' from 'array' into 'chunked'
```js
while (index < array.length) {
}
```
- Add 'size' to 'index'
```js
while (index < array.length) {
  chunked.push( array.slice( index, index + size ) );
}
```
```js
while (index < array.length) {
  chunked.push( array.slice( index, index + size ) );
  index += size;
}
```
- return chunked array.
```js
while (index < array.length) {
  chunked.push( array.slice( index, index + size ) );
  index += size;
}

return chunked;
```
