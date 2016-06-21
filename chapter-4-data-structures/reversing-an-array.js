function reverseArray(array) {
  var newArray = [];

  for (var i = array.length - 1; i >= 0; i--)
    newArray.push(array[i]);

  return newArray;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }

  return array;
}

console.log(reverseArray(["A", "B", "C"]));

var array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log(array);
