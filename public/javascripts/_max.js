function _max(array, func) {
  var result = func(array[0]);
  var object = array[0];
  for (var i = 0; i < array.length; i++) {
    if(func(array[i]) > result)
    {
      result = func(array[i]);
      object = array[i];
    }
  }
  return object;
}
