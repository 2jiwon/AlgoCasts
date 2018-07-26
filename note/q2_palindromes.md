
### Easiest, Straightforward solution

#### workflow

###### 1. Reverse the passed string
```js
const reversed = str.split('').reverse().join('');
```
###### 2. Compare between reversed string and original string
```js
return str === reversed;
```
- - -

### Alternate - Using array helper 'every()'

**How every works?**  
It does a boolean check on every element within an array.

> example: There's an array which has elements (0, 10, 14).  
> And you may be asked 'Is every value greater than 5?'.    

The equation of the question is like below.
```js
array.every(( val ) => val > 5);
```
#### workflow

###### 1. Turn the string into an array
```js
str.split('')
```
###### 2. Passing the empty string, then call every()
As every function's parameters, first parameter is each character from the array.
And second parameter would be the index of the element.

```js
str.split('').every(( char, i) => {});
```
###### 3. Return a comparison between current element and mirrored element.

```js
str.split('').every(( char, i ) => {
    return char === str[str.length -i -1];
});
```
Also, don't forget to return the result of 'every' function call.
```js
return str.split('').every(( char, i ) => {
    return char === str[str.length - i - 1];
});
```
- - -
