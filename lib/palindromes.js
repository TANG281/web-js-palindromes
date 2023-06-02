const isPalindrome = function(s) {
  let stringReverse = '';
  for (let x = s.length - 1; x >= 0; x--) {
    if (s[x] !== ' ') {
      stringReverse += s[x];
    }
  }
  return s.split(" ").join("") === stringReverse;
};

module.exports = isPalindrome;


