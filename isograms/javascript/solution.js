function isIsogram(str) {
  const repeatChar = new Set();
  for(char of str) {
    if (repeatChar.has(char.toLowerCase())) {
      return false;
    }
    repeatChar.add(char.toLowerCase());
  }
  return true;
}