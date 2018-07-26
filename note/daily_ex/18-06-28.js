// 18.06.28
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

