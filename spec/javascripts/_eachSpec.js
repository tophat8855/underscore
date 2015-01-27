describe('_each', function() {
  it ('iterates of a list of elements yielding each in turn', function() {
    array = [1,2,3];

    expect(_each(array, alert)).toEqual(undefined);
  });
});

describe('_find', function() {
  it ('looks through each value and returns the first that passes the test', function(){
    array = [1, 2, 3, 4, 5,6];

    var even = _find(array, function(num){
      return num % 2 === 0;
      });

    expect(even).toEqual(2);
  });
});
