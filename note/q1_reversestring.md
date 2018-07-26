
### Array.prototype.reverse()

#### workflow

1. Turn 'str' into an array
```js
const arr = str.split('');
```

2. Call 'reverse' method on the array
```js
arr.reverse();
```

3. Join the array back into a string
```js
arr.join('');
```

4. Return the result
```js
return arr.join('');
```

5. more simpler
```js
return str.split('').reverse().join('');
```

6. look better
```js
return str
  .split('')
  .reverse()
  .join('');
```
- - -
### Alternate - Without Using 'reverse'

#### workflow

###### 1. Create an empty string called 'reversed'
```js
let reversed = '';
```
###### 2. Take the each character and add it to the start of 'reversed'
** Important ** 
Try to avoid to use 'for loops' in a class way. (e.g. for (var i = 0;....))
Because in this way, there are many chances making mistakes.

```js
for (let character of str) {
  reversed = character + reversed;
}
```
###### 3. Return the variable 'reversed'
```js
return reversed;
```
- - -
### Alternate2 - Complicated version: with array helper

###### 1. Take out the string, turn it into an array with split function.
```js
str.split('')
```
###### 2. Use reduce helper
'reduce' is used to take all the different values with an array and condense
them all down to one single string value.
'reduce' takes 2 separate arguments. One, an arrow function. Two, an initial value.
```js
str.split( '' ).reduce(( reversed, character ) => {
  return character + reversed;
},'' );
```
###### 3. Return the results
```js
return str.split('').reduce(( reversed, character ) => {
    return character + reversed;
}, '');
```
###### 4. Simplify
```js
return str.split('').reduce(( rev, char ) => char + rev, '');
```


