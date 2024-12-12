function findMode(array) {
  let frequencyMap = {};

  array.forEach((element) => {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  });

  let maxCount = 0;
  let mode = [];

  for (const number in frequencyMap) {
    const frequency = frequencyMap[number];

    if (frequency > maxCount) {
      maxCount = frequency;
      mode = [parseInt(number)];
    } else if (frequency === maxCount) {
      mode.push(parseInt(number));
    }
  }

  return mode;
}

console.log(findMode([1, 2, 2, 2, 3, 3, 3, 4, 5]));
