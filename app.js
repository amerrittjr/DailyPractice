function fizzBuzz(int) {
  let result = [];

  for (let i = 1; i <= int; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

function findLongestWord(str) {
  let longestStr = "";

  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestStr.length) {
      longestStr = words[i];
    }
  }

  return longestStr;
}
