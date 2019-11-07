const isNegative = (n) => n < 0;

const isSquare = function(n){
  if (isNegative(n)) {
    return false;
  }
  
  let sqrtN = Math.sqrt(n)
  let sqrtNFloored = Math.floor(sqrtN);
  
  if (sqrtN === sqrtNFloored) {
    return true;
  } else {
    return false;
  }
}
