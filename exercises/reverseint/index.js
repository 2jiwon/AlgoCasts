// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  return parseInt(
            n.toString()
             .split('')
             .reverse()
             .join('')
        ) * Math.sign( n );
}

module.exports = reverseInt;


// My answer
//
//function reverseInt(n) {
//  let reversed = 0;
//  reversed = parseInt( n.toString().split('').reverse().join('') );
//
//  if (Math.sign( n ) < 0) {
//    reversed *= (-1);
//  }
//  return reversed;
//}

//function reverseInt(n) {
//  let reversed = parseInt( n.toString().split('').reverse().join('') );
//  return (Math.sign( n ) < 0) ? (reversed * (-1)) : reversed;
//}
//
//function reverseInt(n) {
//  let reversed = 0;
//  reversed = parseInt(n.toString().split('').reduce(( rev, char ) => char + rev, ''));
//  return (Math.sign( n ) < 0) ? (reversed * (-1)) : reversed;
//}
