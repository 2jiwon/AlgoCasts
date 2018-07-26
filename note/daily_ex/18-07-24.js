// 18.07.24

if (0) {
  function anagrams( stringA, stringB ) {
    const aCharMap = buildCharMap( stringA );
    const bCharMap = buildCharMap( stringB );

    if( Object.keys( aCharMap ).length !== Object.keys( bCharMap ).length ) {
      return false;
    }

    for( let char in aCharMap ) {
      if( aCharMap[char] !== bCharMap[char] ) {
        return false;
      }
    }

    return true;
  }
  
  function buildCharMap( str ) {
    const charMap = [];

    for( let char of str.replace(/[^\w]/g, '').toLowerCase() ) {
      charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
  }

  console.log( anagrams('rail safety', 'fairy tales') );
  console.log( anagrams('RAIL!SAFETY!', 'fairy tales') );
  console.log( anagrams('Hi there', 'Bye there') );
}

if (0) {
  function anagrams( stringA, stringB ) {
    return cleanString( stringA ) === cleanString( stringB );
  }

  function cleanString( str ) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  }

  console.log( anagrams('rail safety', 'fairy tales') );
  console.log( anagrams('RAIL!SAFETY!', 'fairy tales') );
  console.log( anagrams('Hi there', 'Bye there') );
}

if (0) {
  function capitalize( str ) {
    const words = [];

    for( let word of str.split(' ') ) {
      words.push( word[0].toUpperCase() + word.slice(1) );
    }

    return words.join(' ');
  }

  console.log( capitalize('a short sentence') );
}
