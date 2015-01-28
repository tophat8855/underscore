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

describe('_filter', function() {
  it ('goes through list and returns array of everything that passes test', function() {
    array = [1, 2, 3, 4, 5, 6];

    var evens = _filter(array, function(num){
      return num % 2 === 0;
    });

    expect(evens).toEqual([2, 4, 6]);
  });
});

describe('_contains', function() {
  it ('returns true if value is present in list', function() {
    array = [1, 2, 3];

    var truthy = _contains(array, 3);

    expect(truthy).toBe(true);
  });

  it ('returns false if value is not present in list', function() {
    array = [1, 2, 3];

    var falsey = _contains(array, 4);

    expect(falsey).toBe(false);
  });
});

describe('_max', function() {
  it ('returns maximum value in list', function() {
    var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

    var result = _max(stooges, function(stooge){ return stooge.age; });

    expect(result).toEqual({name: 'curly', age: 60});
  });
});
