// 18.06.22
if(0) {
  function reverseInt( n ) {
    return parseInt( 
            n.toString()
             .split('')
             .reverse()
             .join('')
            ) * Math.sign( n );
  }

  console.log( reverseInt( -15 ));
  console.log( reverseInt( 900 ));
}


if(0) {
  function palindrome( str ) {
    return str.split('').every(( char, i ) =>
      str[str.length - i - 1] === char );
  }

  console.log( palindrome( 'abba' ));
}

if(0) {
  function reverse( str ) {
    let reversed = '';

    for( let char of str ) {
      reversed = char + reversed;
    }
    return reversed;
  }
  console.log( reverse( 'love' ) );
}

if(0) {
  function reverse( str ) {
    return str.split('').reduce(( rev, char ) => char + rev, '');
  }

  console.log( reverse( 'love' ) );
}

if(0) {
  function reverse( str ) {
    return str.split('').reverse().join('');
  }

  console.log( reverse( 'love' ) );
}

