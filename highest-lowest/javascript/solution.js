function highAndLow(numbers){
  numbersArray = numbers.split(" ").map(Number)
  return `${Math.max(...numbersArray)} ${Math.min(...numbersArray)}`
}
