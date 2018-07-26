// 18.07.18
if (0) {
  function reverse( str ){
    return str.split('').reverse().join('');
  }
  console.log( reverse( 'apple' ));
}

if (0) {
  function reverse( str ) {
    return str.split('').reduce(( rev, char ) => char + rev, '');
  }
  console.log( reverse( 'apple' ));
}

if (0) {
  function reverse( str ) {
    let reversed = '';

    for( let char of str ) {
      reversed = char + reversed;
    }
    return reversed;
  }
  console.log( reverse( 'apple' ));
}

if (0) {
  function palindrome( str ) {
    return str.split('').every( ( char, i ) => {
      return str[str.length - i - 1] === char;
    });
  }

  console.log( palindrome( 'abba' ));
}

if (0) {
  function reverseInt( n ) {
    return parseInt( n.toString().split('').reverse().join('') )
      * Math.sign( n );
  }

  console.log( reverseInt( -15 ));
  console.log( reverseInt( -500 ));
}

if (0) {
  function maxChars( str ) {
    let charMap = {};
    let maxChar = '';
    let max = 0;

    for( let char of str ) {
      if( !charMap[char] ) {
        charMap[char] = 1;
      } else {
        charMap[char]++;
      }
    }

    for( let char in charMap ) {
      if( charMap[char] > max ) {
        max = charMap[char];
        maxChar = char;
      }
    }

    return maxChar;
  }

  console.log( maxChars( "abccccccd" ));
  console.log( maxChars( "apple 12311111"));
}

if (0) {
  function fizzbuzz( n ) {
    for( let i = 1; i <= n; i++ ) {
      if( i % 3 === 0 && i % 5 === 0 ) {
        console.log( 'fizzbuzz' );
      } else if ( i % 3 === 0 ) {
        console.log( 'fizz' );
      } else if ( i % 5 === 0 ) {
        console.log( 'buzz' );
      } else {
        console.log( i );
      }
    }
  }
  
  console.log( fizzbuzz( 15 ));
}

if (0) {
  function chunk( array, size ) {
    const chunked = [];

    for( let el of array ) {
      const last = chunked[chunked.length - 1];

      if( !last || last.length === size ) {
        chunked.push( [el] );
      } else {
        last.push( el );
      }
    }

    return chunked;
  }

  console.log( chunk([1, 2, 3, 4], 2));
  console.log( chunk([1, 2, 3, 4, 5], 2));
}

if (0) {
  function chunk( array, size ) {
    const chunked = [];
    let   index   = 0;

    while( index < array.length ) {
      chunked.push( array.slice( index, index + size ));
      index += size;
    }

    return chunked;
  }
  console.log( chunk([1, 2, 3, 4], 2));
  console.log( chunk([1, 2, 3, 4, 5], 2));
}
