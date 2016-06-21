function arrayToList(array) {
  var list = null;

  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};

  return list;
}

function listToArray(list) {
  var array = [];

  for (var node = list; node; node = node.rest)
    array.push(node.value);

  return array;
}

function prepend(element, list) {
  return {value: element, rest: list}
}

function nth(list, number) {
  if (!list)
    return undefined;
  else if (number == 0)
    return list.value;
  else
    return nth(list.rest, number - 1);
}

console.log(arrayToList([10, 20]));

console.log(listToArray(arrayToList([10, 20, 30])))

console.log(prepend(10, prepend(20, null)));

console.log(nth(arrayToList([10, 20, 30]), 1));
