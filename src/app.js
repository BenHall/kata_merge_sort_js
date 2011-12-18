var MergeSort = function() {};

MergeSort.prototype.sort = function(collection) {

  var merge = function(collection, startIndex, middleIndex, endIndex) {
    var leftHalf = middleIndex - startIndex + 1;
    var left = [];
    for(var i = 0; i < leftHalf; i++) {
      left.push(collection[startIndex + i]);
    }
    left.push(Infinity);

    var rightHalf = endIndex - middleIndex;
    var right = [];
    for(var j = 0; j < rightHalf; j++) {
      right.push(collection[middleIndex + j + 1]);
    }
    right.push(Infinity);

    var i = 0;
    var j = 0;
    for(var k = startIndex; k < endIndex+1; k++) {
      if(left[i] <= right[j]) {
        collection[k] = left[i];
        i++;
      }
      else {
        collection[k] = right[j];
        j++;
      }
    }

  }

  var middle = function(startIndex, endIndex) {
    return Math.floor((startIndex + endIndex)/2);
  }

  var split = function(collection, startIndex, endIndex) { 
    if(startIndex < endIndex) {
      var m = middle(startIndex, endIndex);
      split(collection, startIndex, m);
      split(collection, m + 1, endIndex);
      merge(collection, startIndex, m, endIndex);
    }

    return collection;
  }

  return split(collection, 0, collection.length - 1);
}
