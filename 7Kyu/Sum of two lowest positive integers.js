function sumTwoSmallestNumbers(numbers) {  
    console.log(numbers.sort())
    return numbers.sort(function(a, b) {
    return a - b;
  })[0]+numbers.sort(function(a, b) {
    return a - b;
  })[1]
  }