
### Hint

#### Tricky part

This is about numbers, not string.  
Make sure the return value is a number, not a string.  

+ Use 'toString' function

+ Use 'Math.sign' function  
This returns 1 or -1 depending on the number is positive or negative.

+ Use 'parseInt' function

### Easiest, Straightforward solution

#### workflow

###### 1. Take the passed number, turn it into a string 
```js
n.toString()
```
###### 2. Reverse the string
```js
n.toString().reverse().join('');
```
###### 3. Return the string as a number using 'parseInt' function
```js
const reversed = n.toString()
                  .split('')
                  .reverse()
                  .join('');
return parseInt( reversed );
```
###### 4. Match the original number's sign to returning value
```js
if (n < 0) {
  return parseInt( reversed ) * -1;
}
```
###### 5. Rearrange the returning part using 'Math.sign' function
```js
return parseInt( reversed ) * Math.sign( n );
```

###### 6. If you prefer one line solution 
```js
return parseInt( n.toString().split('').reverse().join('') ) * Math.sign( n );
```
Though, one line solution also need a little styling as readible.
```js
return(
  parseInt(
    n
      .toString()
      .split('')
      .reverse()
      .join('')
  ) * Math.sign( n )
);
```

- - -

### Alternate - not necessary about this one

- - -
