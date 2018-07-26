
### Hint

[img](./steps_diagram.png)

- First, we are going to have some number of columns in the rows to iterate through.
(row: -- / col: |)
- 'i' is referring to the current 'row'
- 'j' is referring to the current 'colum'  

Hmm, just name them column and row instead of using 'i'and 'j'.

[img](./steps_diagram2.png)

### Easiest, Straightforward solution
#### workflow

###### 1. Write a 'first for loop'.
This for loop, we are going to iterate through all the different rows that we have.

- Iterate from 0 to N (iterate through rows)
```js
for( let row = 0; row < n; row++) {}
```
- For each row, start off by creating an empty string called 'stair' that indicates one individual row
```js
for( let row = 0; row < n; row++) {
  let stair = '';
}
```
- Then, iterate from 0 to N AGAIN (second for loop, iterate through columns)
```js
  for( let column = 0; column < n; column++) {}
```
[img](./steps_diagram3.png)

  - IF the current column is equal to OR less than the current row
```js
    if( column <= row ) {}
```
    - Add a '#' to 'stair'
```js
    if( column <= row ) {
      stair += '#';  
    }
```
  - ELSE (the current column is greater than the current row)
    - Add a ' ' to 'stair'
```js
    if( column <= row ) {
      stair += '#';  
    } else {
      stair += ' ';
    }
```
- Console log 'stair'
```js
for( let row = 0; row < n; row++) {
  ...
  console.log( stair );
}
```
- Then go through the next iteration, move onto the next row
- - -

### Alternate solution 

