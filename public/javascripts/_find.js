function _find(array, func) {
  for (var i = 0; i < array.length; i++) {
    var result = func(array[i]);
    if (result) {
      return array[i];
    }
  }
}
