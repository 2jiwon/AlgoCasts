// 18.06.21
if (0) {
  function reverse(str) {
    return str.split('').reverse().join('');
  }
}

if (0) {
  function reverse(str) {
    let reversed = '';

    for (let character of str) {
      reversed = character + reversed;
    }

    return reversed;
  }
}

if (0) {
  function reverse(str) {
    return str.split('').reduce(( rev, char ) => char + rev, '');
  }
  console.log (reverse ('love'));
}

