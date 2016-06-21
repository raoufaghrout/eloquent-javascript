function range(start, end, step) {
  var range = [];
  if (step == null) { step = 1; }

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      range.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      range.push(i);
  }

  return range;
}

function sum(array) {
  var sum = 0;

  for (var i = 0; i < array.length; i++)
    sum += array[i];

  return sum;
}

console.log(range(1, 10));

console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));
