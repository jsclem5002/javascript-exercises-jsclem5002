const sumAll = function (min, max) {
  let temp = 0;
  let sum = 0;
  if (min > max) {
    temp = max;
    max = min;
    min = temp;
  } else if (
    min < 0 ||
    max < 0 ||
    !Number.isInteger(min) ||
    !Number.isInteger(max)
  ) {
    return "ERROR";
  }

  for (i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
