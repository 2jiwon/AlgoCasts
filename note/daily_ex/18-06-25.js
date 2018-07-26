// 18.06.25
if (0) {
  function fizzbuzz( n ) {
    for( let i = 1; i <= n; i++ ) {
      if ( i % 3 == 0 && i % 5 == 0 ) {
        console.log( 'fizzbuzz' );
      } else if ( i % 3 == 0 ) {
        console.log( 'fizz' );
      } else if ( i % 5 == 0 ) {
        console.log( 'buzz' );
      } else {
        console.log(i);
      }
    }
  }

  console.log( fizzbuzz(5) ); 
  
}

if (0) {
  function maxChars( str ) {

  let charMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for(let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
  }

  console.log( maxChars("abcccccccd"));
}


if (0) {
  function reverseInt( n ) {
    return parseInt( n.toString().split('').reverse().join('') )
      * Math.sign( n );
  }

  console.log( reverseInt (500));
}

if (0) {
  function palindrome( str ) {
    return str.split('').every(( char, i ) => {
      return char === str[str.length - i - 1]; 
    });
  }

  console.log( palindrome ('abba'));
}

if (0) {
  function reverse( str ) {
    return str.split('').reduce(( rev, char ) => char + rev, '');
  }

  console.log (reverse( 'love' ));
}

if (0) {

  function reverse( str ) {
    return str.split('').reverse().join('');
  }

  console.log (reverse( 'love' ));
}
