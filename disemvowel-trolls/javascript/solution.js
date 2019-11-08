const isVowel = (char) => char.toUpperCase() === 'A' ||
                          char.toUpperCase() === 'E' || 
                          char.toUpperCase() === 'I' ||
                          char.toUpperCase() === 'O' ||
                          char.toUpperCase() === 'U';
                          
function disemvowel(str) {
  disemvowelWord = ""
  for (char of str) {
    if (!isVowel(char)) {
      disemvowelWord += char;
    }
  }
  return disemvowelWord;
}