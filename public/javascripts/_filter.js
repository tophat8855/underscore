function _filter(array, func) {
  var resultingArray =[];
  var result;
  for (var i = 0; i < array.length; i++) {
    result = func(array[i]);
    if (result) {
      resultingArray.push(array[i]);
    }
  }
  return resultingArray;
}
