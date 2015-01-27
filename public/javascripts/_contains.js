function _contains(array, value) {
  var boole = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      boole = true;
    }
  }
  return boole;
}
