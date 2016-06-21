function countChar(word, char) {
  var count = 0;

  for (var i = 0; i < word.length; i++) {
    if (word.charAt(i) === char)
      count++;
  }

  return count;
}

function countBs(word) {
  return countChar(word, "B");
}

console.log(countBs("BBC"));

console.log(countChar("kakkerlak", "k"));
